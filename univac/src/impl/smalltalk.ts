import { ParserImpl, preventRedundantTypeNames } from '../parserImpl'

export function getSmalltalkImpl(): ParserImpl {
  return {
    Lexer: require('../grammar/smalltalk/SmalltalkLexer').SmalltalkLexer,
    Parser: require('../grammar/smalltalk/SmalltalkParser').SmalltalkParser,
    mainRule: 'script',
    redundantTypes: (node, parent) => preventRedundantTypeNames(node, parent, node => ['ws', 'parsetimeLiteral', 'binarySend', 'unarySend', 'cascade', 'expressions', 'expression'].includes(node.type))
  }
}
