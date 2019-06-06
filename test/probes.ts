import { printNode, parseAst, Language } from '../src';

console.log(printNode({node: parseAst({
  input: 'a=1',
  language: Language.python3,
  text: true
})}))