import { ParserImpl } from '../parserImpl';
import { Node } from '../types';
import { format } from 'url';

export function getSExpressionImpl(): ParserImpl {
  const Lexer = require('../grammar/sexpression/sexpressionLexer').sexpressionLexer
  const Parser = require('../grammar/sexpression/sexpressionParser').sexpressionParser
  const r = {
    Lexer,
    Parser,
    mainRule: 'sexpr', 
     mutate
  }
  return r
}
function mutate(ast: Node, impl: ParserImpl) {
  // in the original grammar there are three types, ListContext, ItemContext and AtomContext. ItemContext is only used as an itermediary so we will deleting it. Actually what we do is removing Item, and renaning atom to item. We verify that children is exactly one, has a parent, and its type and text are ideantical to its childAlso we rename the types to be shorter.
  // So the grammar will be transformed format
  // L => ([I]...), I=>L|A,
  // L=>([I|A]...)

  function f(n: Node, p?: Node) {
    // let mutated = false
    if(n.start===undefined){
      delete n.start
    }
    if(n.stop===undefined){
      delete n.stop
    }
    if (n.type === 'item') {
      p = p || n.parent
      if (p) {
        if (n.children.length ) {
          const ni = p.children.findIndex(i=>i===n)
          p.children.splice(ni, 1, ...n.children)
          // const ci = n.children.findIndex(i=>i===c)
          // const c = n.children[0]
          // if (n.text === c.text) {
            // we can mutate
            // p.children = [c]
            // c.parent = p
            // mutated = true
          // }
          // else {
            //TODO
          // }
        }
        else {
            //TODO
        }
      }
      else {
            //TODO
      }
    }
    else {
            //TODO
    }
    // n.type = n.type === 'ListContext' ? 'list' : 'atom'
    n.children.forEach(c => f(c, n))
    return n
  }
  return f(ast)
}