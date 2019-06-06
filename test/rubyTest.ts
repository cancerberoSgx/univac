import test from 'ava'
import { parseAst } from '../src/parseAst'

const result = parseAst({
  input: `
for(i = 1; i < length - 1; i+=1)
  for(j = 0; j < length - i; j+=1)
    if(mas[j] > mas[j+1])
      buf = mas[j]
      mas[j] = mas[j+1]
      mas[j+1] = buf
    end
  end
end
  `,
  language: 'ruby'
})

test('should parse', t => {
  t.is(result.children.length, 1)
})

test('should serialize', t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: `/&%$·@ def && 1 h 7 6 ¿Ñ`,
    language: 'ruby'
  }))
})
