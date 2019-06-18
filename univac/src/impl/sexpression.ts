import { ParserImpl } from '../parserImpl'
import { Node } from '../types'

export function getSExpressionImpl(): ParserImpl {
  const Lexer = require('../grammar/sexpression/sexpressionLexer').sexpressionLexer
  const Parser = require('../grammar/sexpression/sexpressionParser').sexpressionParser
  return {
    Lexer,
    Parser,
    mainRule: 'sexpr',
    mutate
  }
}
function mutate(ast: Node, impl: ParserImpl) {
  // in the original grammar there are three types, ListContext, ItemContext and AtomContext. ItemContext is only used as an intermediary so we will deleting it. Actually what we do is removing Item, and renaming atom to item. We verify that children is exactly one, has a parent, and its type and text are identical to its childAlso we rename the types to be shorter.
  // So the grammar will be transformed format
  // L => ([I]...), I=>L|A,
  // L=>([I|A]...)

  function f(n: Node, p?: Node) {
    if (n.start === undefined) {
      delete n.start
    }
    if (n.stop === undefined) {
      delete n.stop
    }
    if (n.type === 'item') {
      p = p || n.parent
      if (p) {
        if (n.children.length) {
          const ni = p.children.findIndex(i => i === n)
          p.children.splice(ni, 1, ...n.children)
        }
      }
    }
    n.children.forEach(c => f(c, n))
    return n
  }
  return f(ast)
}
