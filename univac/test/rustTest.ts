import test from 'ava'
import { writeFileSync } from 'fs'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { getPackageJsonFolder } from '../src/util/misc'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
pub type __darwin_size_t = ::std::os::raw::c_ulong;
pub type FILE = [u64; 19usize];
pub type TSSymbol = u16;
pub type TSFieldId = u16;
#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub struct TSLanguage {
    _unused: [u8; 0],
}
#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub struct TSParser {
    _unused: [u8; 0],
}
#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub struct TSTree {
    _unused: [u8; 0],
}
pub const TSInputEncoding_TSInputEncodingUTF8: TSInputEncoding = 0;
    `,
    language: Language.rust,
    omitPosition: true,
    text: true,
    basePath: getPackageJsonFolder() + '/dist/static/'
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 14)
})

test('JSON stringify', async t => {
  t.notThrows(() => JSON.stringify(result))
  // console.log(JSON.stringify(result, null, 2))  
})

test.todo('should report syntax errors to given listener')
// , async t => {
//   await parseAstOrThrow({
//     input: 'jo jo jo',
//     language: Language.rust,
//     errorListener: {
//       syntaxError(a, b, c, d, msg) {
//         t.true(msg.includes(`no viable alternative at input`), msg)
//       }
//     }
//   })
// })

test('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  writeFileSync('tmp.txt', o)
  const expected = [`<type_identifier text="__darwin_size_t">
</type_identifier> <= text="=">
  </=> <scoped_type_identifier text="::std::os::raw::c_ulong">
    <scoped_identifier text="::std::os::raw">
      <scoped_identifier text="::std::os">
        <scoped_identifier text="::std">
          <:: text="::">
          </::> <identifier text="std">
          </identifier>`]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
