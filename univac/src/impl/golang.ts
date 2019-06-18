import { ParserImpl } from '../parserImpl'

export function getGolangImpl(): ParserImpl {
  return {
    Lexer: require('../grammar/golang/GolangLexer').GolangLexer,
    Parser: require('../grammar/golang/GolangParser').GolangParser,
    mainRule: 'sourceFile',
  }
}
