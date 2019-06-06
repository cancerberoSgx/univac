import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types'

const result = parseAst({
  input: 'int main() {}',
  language: Language.c
})

test('should parse', t => {
  t.is(result.children.length, 1)
})

test('JSON stringify', t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: 'jo jo jo 123',
    language: Language.c
  }))
})
