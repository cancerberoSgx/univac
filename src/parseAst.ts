import { GetAstOptions, Language } from './types'
import { getVisitorResult, Visitor } from './visitor'
var antlr4 = require('antlr4')

export function parseAst(options: GetAstOptions) {
  const input = options.input
  var { Laxer, Parser } = getParserForLanguage(options.language)
  var chars = new antlr4.InputStream(input)
  var lexer = new Laxer(chars)
  var tokens = new antlr4.CommonTokenStream(lexer)
  var parser = new Parser(tokens)
  //  parser.buildParseTrees = true;
  var tree = parser.compilationUnit()

  if (tree.exception) {
    throw new Error('Parser exception: ' + tree.exception)
  }
  const visitor = new Visitor(options)
  tree.accept(visitor)
  return getVisitorResult()
}

function getParserForLanguage(language: Language) {
  if (language === 'c') {
    return {
      Laxer: require('./grammar/c/CLexer').CLexer,
      Parser: require('./grammar/c/CParser').CParser
    }
  }
  else {
    throw new Error('Language unknown: ' + language)
  }
}

