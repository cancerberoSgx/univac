import test from 'ava'
import { writeFileSync } from 'fs'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { getPackageJsonFolder } from '../src/util/misc'


test('dummy', t => {
  t.true(true)
})

// let result: Node
// test.before(async t => {

//   console.time('julia')
//   result = await parseAstOrThrow({
//     input: `
//     function test(x, y)
//     if x < y
//         println("x is less than y")
//     elseif x > y
//         println("x is greater than y")
//     else
//         println("x is equal to y")
//     end
//   end
//     `,
//     language: Language.julia,
//     debug: true,
//     omitPosition: true,
//     text: true,
//     basePath: getPackageJsonFolder() + '/dist/static/'
//   })!
//   t.true(!!result)
//   console.timeEnd('julia')
// })

// test('should parse', async t => {
//   t.is(result.children.length, 8)
// })

// test('JSON stringify', async t => {
//   t.notThrows(() => JSON.stringify(result))
// })

// test.skip('should report syntax errors to given listener', async t => {
//   //   await parseAstOrThrow({
//   //     input: 'jo jo jo',
//   //     language: Language.ocaml,
//   //     errorListener: {
//   //       syntaxError(a, b, c, d, msg) {
//   //         t.true(msg.includes(`no viable alternative at input`), msg)
//   //       }
//   //     }
//   //   })
// })

// // test('generate correct ast', async t => {
// //   const o = printNode({
// //     node: result
// //   })
// //   writeFileSync('tmp.txt', o)
// //   const expected = [`asd`, ``, ``, ``,]
// //   expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
// // })
