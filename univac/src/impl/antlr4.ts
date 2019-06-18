import { ParserImpl } from '../parserImpl'

export function getAntlr4Impl(): ParserImpl {
  return {
    Lexer: require('../grammar/antlr4/ANTLRv4Lexer').ANTLRv4Lexer,
    Parser: require('../grammar/antlr4/ANTLRv4Parser').ANTLRv4Parser,
    mainRule: 'grammarSpec',
  }
}
