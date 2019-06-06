import * as antlr4 from 'antlr4'
import { ErrorListener } from 'antlr4/error'
import { getParserImpl, ParserImpl } from './parserImpl'
import { GetAstOptions, Node } from './types'
import { Visitor } from './visitor'

export async function parseAst(options: GetAstOptions) {
  const input = options.input
  var info = await getParserImpl(options.language)
  var chars = new antlr4.InputStream(input)
  //@ts-ignore
  var lexer = new info.Lexer(chars)
  var tokens = new antlr4.CommonTokenStream(lexer)
  if (info.Filter) {
    var filter = new info.Filter(tokens)
    //@ts-ignore
    filter.stream() // call start rule: stream
    tokens.reset()
  }
  var parser = new info.Parser(tokens)
  options.errorListener && parser.addErrorListener({ ...defaultErrorListener, ...options.errorListener || {} } as any)
  parser.buildParseTrees = true
  //@ts-ignore
  var tree = parser[info.mainRule]()
  // if (tree.exception) {
  //   throw new Error('Parser exception: ' + tree.exception)
  // }
  const visitor = new Visitor(options)
  tree.accept(visitor)
  const ast = visitor.getAst()
  return removeRedundantNode(ast, info)
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


