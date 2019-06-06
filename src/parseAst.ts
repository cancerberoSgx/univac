import { GetAstOptions, Language, Node } from './types'
import { Visitor } from './visitor'
var antlr4 = require('antlr4')

export function parseAst(options: GetAstOptions) {
  const input = options.input
  var info = getParserForLanguage(options.language)
  var chars = new antlr4.InputStream(input)
  var lexer = new info.Lexer(chars)
  var tokens = new antlr4.CommonTokenStream(lexer)
  if (info.Filter) {
    var filter = new info.Filter(tokens)
    filter.stream() // call start rule: stream
    tokens.reset()
  }
  var parser = new info.Parser(tokens)
  parser.buildParseTrees = true
  var tree = parser[info.mainRule]()

  if (tree.exception) {
    throw new Error('Parser exception: ' + tree.exception)
  }
  const visitor = new Visitor(options)
  tree.accept(visitor)
  const ast = visitor.getAst()
  return removeRedundantNode(ast, info)
}

// var antlr4 = require('antlr4');
// var MyGrammarLexer = require('./RLexer').RLexer;
// var MyGrammarParser = require('./RParser').RParser;
// var RFilter = require('./RFilter').RFilter;
// var chars = new antlr4.InputStream(input);
// var lexer = new MyGrammarLexer(chars);
// var tokens  = new antlr4.CommonTokenStream(lexer);
// var tokens = new antlr4.CommonTokenStream(lexer);
// var filter = new RFilter(tokens);
// filter.stream(); // call start rule: stream
// tokens.reset();
// var parser = new MyGrammarParser(tokens);
// parser.buildParseTrees = true;
// // //  parser.query()
// var tree = parser.prog();


function removeRedundantNode(node: Node, info: LanguageParserInfo) {
  do {
  } while (removeRedundantNode_(node, info) > 0)
  return node
}

function removeRedundantNode_(node: Node, info: LanguageParserInfo, parent?: Node, count: { n: number } = { n: 0 }) {
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

interface LanguageParserInfo {
  Lexer: any
  Parser: any
  Filter?: any
  mainRule: string
  redundantTypes?(node: Node, parent?: Node): boolean
}

function getParserForLanguage(language: Language): LanguageParserInfo {
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
  else if (language === 'java9') {
    return {
      Lexer: require('./grammar/java9/Java9Lexer').Java9Lexer,
      Parser: require('./grammar/java9/Java9Parser').Java9Parser,
      mainRule: 'compilationUnit',
      redundantTypes: (node, parent) => [
        'primaryNoNewArray_lfno_primary', 'assignmentExpression', 'conditionalExpression', 'conditionalOrExpression', 'conditionalAndExpression', 'inclusiveOrExpression', 'exclusiveOrExpression', 'andExpression', 'equalityExpression', 'relationalExpression', 'shiftExpression', 'additiveExpression', 'multiplicativeExpression', 'unaryExpression', 'unaryExpressionNotPlusMinus', 'unannClassType_lfno_unannClassOrInterfaceType',
      ].includes(node.type)
        && (node.children.length === 1 ? node.children[0].text === node.text : node.children.length === 0) && !(!!parent && parent.text !== node.text)
    }
  }
  else if (language === 'lua') {
    return {
      Lexer: require('./grammar/lua/LuaLexer').LuaLexer,
      Parser: require('./grammar/lua/LuaParser').LuaParser,
      mainRule: 'chunk'
    }
  }
  else if (language === 'dart2') {
    return {
      Lexer: require('./grammar/dart2/Dart2Lexer').Dart2Lexer,
      Parser: require('./grammar/dart2/Dart2Parser').Dart2Parser,
      mainRule: 'compilationUnit',
      redundantTypes: node => node.children.length === 1 && node.type.endsWith('Expression')
    }
  }
  else if (language === 'python3') {
    return {
      Lexer: require('./grammar/python3/Python3Lexer').Python3Lexer,
      Parser: require('./grammar/python3/Python3Parser').Python3Parser,
      mainRule: 'file_input',
      redundantTypes: (node, parent) => (node.type.endsWith('expr') || node.type.endsWith('test')
        || ['term', 'factor', 'power', 'small_stmt', 'simple_stmt', 'compound_stmt', 'suite', 'number'].includes(node.type)
      )
        && (node.children.length === 1 ? (node.children[0].text === node.text) : node.children.length === 0) && !(!!parent && parent.text !== node.text)
    }
  }
  else if (language === 'erlang') {
    return {
      Lexer: require('./grammar/erlang/ErlangLexer').ErlangLexer,
      Parser: require('./grammar/erlang/ErlangParser').ErlangParser,
      mainRule: 'forms',
      redundantTypes: (node, parent) => preventRedundantTypeNames(node, parent, (node, parent) => !!node.type.match(/expr[0-9]+/) || ['exprMax', 'expr'].includes(node.type))
    }
  }
  else if (language === 'java') {
    return {
      Lexer: require('./grammar/java/JavaLexer').JavaLexer,
      Parser: require('./grammar/java/JavaParser').JavaParser,
      mainRule: 'compilationUnit'
    }
  }
  else if (language === 'kotlin') {
    return {
      Lexer: require('./grammar/kotlin/KotlinLexer').KotlinLexer,
      Parser: require('./grammar/kotlin/KotlinParser').KotlinParser,
      mainRule: 'kotlinFile',
      redundantTypes: (node, parent) => preventRedundantTypeNames(node, parent, (node, parent) => ['disjunction', 'conjunction', 'conditionalExpression', 'equalityComparison', 'comparison', 'namedInfix', 'elvisExpression', 'infixFunctionCall', 'rangeExpression', 'additiveExpression', 'multiplicativeExpression', 'typeRHS', 'prefixUnaryExpression', 'postfixUnaryExpression'].includes(node.type))
    }
  }
  else if (language === 'r') {
    return {
      Lexer: require('./grammar/r/RLexer').RLexer,
      Parser: require('./grammar/r/RParser').RParser,
      Filter: require('./grammar/r/RFilter').RFilter,
      mainRule: 'prog'
    }
  }
  else {
    throw new Error('Language unknown: ' + language)
  }
}
function preventRedundantTypeNames(node: Node, parent: Node | undefined, predicate: (node: Node, parent: Node | undefined) => boolean): boolean {
  const textSameAsParent = parent && parent.text === node.text
  const textSameAsChild = node.children.length === 1 && node.children[0].text === node.text
  return predicate(node, parent) && node.children.length < 2 && (textSameAsParent || textSameAsChild)
}

