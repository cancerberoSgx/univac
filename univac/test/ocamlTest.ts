import test from 'ava'
// import { writeFileSync } from 'fs'
// import { removeWhites } from 'misc-utils-of-mine-generic'
// import { printNode } from '../src'
// import { parseAstOrThrow } from '../src/parseAst'
// import { Language, Node } from '../src/types'
// import { getPackageJsonFolder } from '../src/util/misc'

test('dummy', t => {
  t.true(true)
})
// let result: Node
// test.before(async t => {
//   result = await parseAstOrThrow({
//     input: `
// let rec member x btree =
//   match btree with
//     Empty -> false
//   | Node(y, left, right) ->
//     if x = y then true else
//     if x < y then member x left else member x right;;

// let flat_assoc_opt x l =
//   match List.assoc x l with
//     | None | exception Not_found -> None
//     | Some _ as v -> v;;
//     `,
//     language: Language.ocaml,
//     omitPosition: true,
//     text: true,
//     basePath: getPackageJsonFolder() + '/dist/static/'
//   })!
//   t.true(!!result)
// })

// test('should parse', async t => {
//   t.is(result.children.length, 9)
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

// test('generate correct ast', async t => {
//   const o = printNode({
//     node: result
//   })
//   writeFileSync('tmp.txt', o)
//   const expected = [`asd`, ``, ``, ``,]
//   expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
// })
