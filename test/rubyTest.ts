import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAst({
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
    language: Language.ruby
  })
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', async t => {
  await t.throwsAsync(() => parseAst({
    input: `/&%$·@ def && 1 h 7 6 ¿Ñ`,
    language: Language.ruby
  }))
})
test.skip('ast is correct', async t => { })
