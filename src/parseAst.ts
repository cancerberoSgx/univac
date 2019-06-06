import { GetAstOptions, Language } from './types'
import { getVisitorResult, Visitor } from './visitor'
var antlr4 = require('antlr4')

export function parseAst(options: GetAstOptions) {
  const input = options.input
  var { Lexer, Parser, mainRule } = getParserForLanguage(options.language)
  var chars = new antlr4.InputStream(input)
  var lexer = new Lexer(chars)
  var tokens = new antlr4.CommonTokenStream(lexer)
  var parser = new Parser(tokens)
  //  parser.buildParseTrees = true;
  var tree = parser[mainRule]()

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
      Lexer: require('./grammar/c/CLexer').CLexer,
      Parser: require('./grammar/c/CParser').CParser,
      mainRule: 'compilationUnit'
    }
  }
  else if (language === 'golang') {
    return {
      Lexer: require('./grammar/golang/GolangLexer').GolangLexer,
      Parser: require('./grammar/golang/GolangParser').GolangParser,
      mainRule: 'sourceFile'
    }
  }
  else if (language === 'scala') {
    return {
      Lexer: require('./grammar/scala/ScalaLexer').ScalaLexer,
      Parser: require('./grammar/scala/ScalaParser').ScalaParser,
      mainRule: 'compilationUnit'
    }
  }
  else if (language === 'ruby') {
    return {
      Lexer: require('./grammar/ruby/RubyLexer').RubyLexer,
      Parser: require('./grammar/ruby/RubyParser').RubyParser,
      mainRule: 'prog'
    }
  }
  else {
    throw new Error('Language unknown: ' + language)
  }
}

