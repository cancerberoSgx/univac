import test from 'ava'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
-- defines a factorial function
function fact (n)
  if n == 0 then
    return 1
  else
    return n * fact(n-1)
  end
end

print("enter a number:")
a = io.read("*number")        -- read a number
print(fact(a))
  `,
    language: Language.lua
  })
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', async t => {
  await t.throwsAsync(() => parseAstOrThrow({
    input: `/&%$·@ def && 1 h 7 6 ¿Ñ`,
    language: Language.lua
  }))
})

test.skip('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: '-- ',
    language: Language.lua,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`mismatched input`) || msg.includes(`extraneous input`), msg)
      }
    }
  })
})

test.skip('ast is correct', async t => { })
