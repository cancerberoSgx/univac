import * as antlr4 from 'antlr4'
import { ErrorListener } from 'antlr4/error'
import { pathJoin } from 'misc-utils-of-mine-generic'
import Parser from 'web-tree-sitter'
import { getParserImpl, ParserImpl } from './parserImpl'
import { GetAstOptions, Node } from './types'
import { Visitor } from './visitor'
import { TreeSitterVisitor } from './visitorTreeSitter'

export async function parseAstOrThrow(options: GetAstOptions): Promise<Node> {
  const r = await parseAst(options)
  if (!r) {
    throw new Error('Expected to parse AST')
  }
  return r
}

const wasmLoaded:{[wasm:string]: Parser} = {}

export async function parseAst(options: GetAstOptions): Promise<Node | undefined> {
  const input = options.input
  var info = await getParserImpl(options.language)
  let ast: Node
  const parseT0 = Date.now()
  let postProcessingT0=-1, parseTime = -1 , postProcessingTime = -1
  if (info.Parser && info.Lexer) {
    var chars = new antlr4.InputStream(input)
    //@ts-ignore
    var lexer = new info.Lexer(chars)
    var tokens = new antlr4.CommonTokenStream(lexer)
    if (info.Filter) {
      var filter = new info.Filter(tokens)
      //@ts-ignore
      filter.stream()
      tokens.reset()
    }
    var parser = new info.Parser(tokens)
    options.errorListener && parser.addErrorListener({ ...defaultErrorListener, ...options.errorListener || {} } as any)
    // parser.buildParseTrees = true
    //@ts-ignore
    var tree = parser[info.mainRule]()
    parseTime = Date.now()- parseT0

    postProcessingT0=Date.now()
    const visitor = new Visitor()

    visitor.options = options
    tree.accept(visitor)
    ast = visitor.getAst()
  }
  else if (info.treeSitterParser) {
    options.basePath = options.basePath || ''
    let parser: Parser = wasmLoaded[options.basePath] as any
    
    if(!parser){
      await Parser.init()
      parser = new Parser()
      const Lang = await Parser.Language.load(pathJoin(options.basePath, info.treeSitterParser))
      parser.setLanguage(Lang)
      wasmLoaded[options.basePath] = parser
    }
    // TODO; don't load again the .wasm if already loaded.
    const tree = parser.parse(input)
    parseTime = Date.now()- parseT0
    postProcessingT0=Date.now()

    options.debug && console.log(tree.rootNode.toString())
    const normalizer = new TreeSitterVisitor()
    normalizer.options = { ...options, root: tree.rootNode }
    ast = normalizer.getAst()

  }

  else {
    throw new Error('Unrecognized ParseImpl returned ' + info)
  }

  // common post-processing
  ast = removeRedundantNode(ast, info)
  ast = info.mutate ? info.mutate(ast, info) : ast
  postProcessingTime=Date.now() - postProcessingT0
 options.debug && console.log({parseTime, postProcessingTime});
  
  return ast
}

function removeRedundantNode(node: Node, info: ParserImpl) {
  do {
  } while (removeRedundantNode_(node, info) > 0)
  return node
}

function removeRedundantNode_(node: Node, info: ParserImpl, parent?: Node, count: { n: number } = { n: 0 }) {
  if (parent && info.redundantTypes && info.redundantTypes(node, parent)) {
    const i = parent.children.findIndex(c => c === node)
    if (i !== -1) {
      count.n++
      parent.children.splice(i, 1, ...node.children)
    }
  }
  node.children.forEach(c => removeRedundantNode_(c, info, node, count))
  return count.n
}

const defaultErrorListener: ErrorListener = {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e): void {
  },
  reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs): void {
  },
  reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs): void {
  },
  reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs): void {
  }
}
