import { ParserImpl, preventRedundantTypeNames } from '../parserImpl'

export function getCppImpl(): ParserImpl {
  return {
    Lexer: require('../grammar/cpp/CPP14Lexer').CPP14Lexer,
    Parser: require('../grammar/cpp/CPP14Parser').CPP14Parser,
    mainRule: 'translationunit',
    redundantTypes: (node, parent) => preventRedundantTypeNames(node, parent, node => node.type.endsWith('expression') || ['ptrdeclarator', 'noptrdeclarator', 'declarationseq'].includes(node.type))
  }
}
