import { ParserImpl, preventRedundantTypeNames } from '../parserImpl'

export function getScssImpl(): ParserImpl {
  return {
    Lexer: require('../grammar/scss/ScssLexer').ScssLexer,
    Parser: require('../grammar/scss/ScssParser').ScssParser,
    mainRule: 'stylesheet',
    redundantTypes: (node, parent) => preventRedundantTypeNames(node, parent, (node, parent) => ['ExpressionContext'].includes(node.type)),
    // mutate
  }
}

// function mutate(ast: Node, impl: ParserImpl) {
//   function f(n: Node, p?: Node) {
//     if (n.start === undefined) {
//       delete n.start
//     }
//     if (n.stop === undefined) {
//       delete n.stop
//     }
//     if (n.type === 'rule_') {
//       n.type = 'rule'
//     }
//     n.children.forEach(c => f(c, n))
//     return n
//   }
//   return f(ast)
// }

