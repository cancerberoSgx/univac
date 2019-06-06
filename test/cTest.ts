import test from 'ava'
import { parseAst } from '../src/parseAst'

test('should parse', t => {
  const result = parseAst({
    input: 'int main() {}',
    language: 'c'
  })
  t.is(result.children.length, 1)
})

test('JSON stringify', t => {
  const result = parseAst({
    input: 'int main() {}',
    language: 'c'
  })
  t.notThrows(()=>JSON.stringify(result))
})

test('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: 'jo jo jo 123',
    language: 'c'
  }))
})
