import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
program main

c*********************************************************************72
c 
      implicit none

      write ( *, '(a)' ) '  Hello, world!'

      stop
      end
      `.trim(),
    language: Language.fortran77,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: 'a',
    language: Language.fortran77,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`no viable alternative at input`), msg)
      }
    }
  })
})

test.skip('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  const expected = [``]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
