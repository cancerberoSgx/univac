import { ParserImpl, preventRedundantTypeNames } from '../parserImpl'

export function getScssImpl(): ParserImpl {
  return {
    Lexer: require('../grammar/scss/ScssLexer').ScssLexer,
    Parser: require('../grammar/scss/ScssParser').ScssParser,
    mainRule: 'stylesheet',
    redundantTypes: (node, parent) => preventRedundantTypeNames(node, parent, node => ['ExpressionContext'].includes(node.type)),
  }
}
 