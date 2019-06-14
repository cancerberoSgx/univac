import { ParserImpl, preventRedundantTypeNames } from '../parserImpl'
import { Node } from '../types'

export function getAbnfImpl(): ParserImpl {
  return {
    Lexer: require('../grammar/abnf/AbnfLexer').AbnfLexer,
    Parser: require('../grammar/abnf/AbnfParser').AbnfParser,
    mainRule: 'rulelist',
    redundantTypes: (node, parent) => preventRedundantTypeNames(node, parent, (node, parent) => ['repetition','element', 'option', 'alternation', 'concatenation', 'elements'].includes(node.type)),
    mutate
  }
}

function mutate(ast: Node, impl: ParserImpl) {
  function f(n: Node, p?: Node) {
    if (n.start === undefined) {
      delete n.start
    }
    if (n.stop === undefined) {
      delete n.stop
    }
    if(n.type==='rule_'){
      n.type='rule'
    }
    n.children.forEach(c => f(c, n))
    return n
  }
  return f(ast)
}

