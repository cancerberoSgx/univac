import test from 'ava'
import { parseAst } from '../src/parseAst';

test('parseAst', t => {
  const result = parseAst({
    input: 'int main() {}',
    language: 'c'
  })
  t.truthy(result)
})
