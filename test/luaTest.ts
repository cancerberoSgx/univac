import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types'

const result = parseAst({
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

test('should parse', t => {
  t.is(result.children.length, 1)
})

test('should serialize', t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: `/&%$·@ def && 1 h 7 6 ¿Ñ`,
    language: Language.lua
  }))
})
