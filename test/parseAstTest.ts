import test from 'ava'
import { parseAst } from '../src/parseAst'

test('parseAst', t => {
  const result = parseAst({
    input: 'int main() {}',
    language: 'c'
  })
  t.is(result.children.length, 1)
})

test('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: 'jo jo jo 123',
    language: 'c'
  }))
})
