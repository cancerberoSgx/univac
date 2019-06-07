import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { writeFileSync } from 'fs';

let result: Node
test.before(async t => {
  result = await parseAst({
    input: `
(module
  ;; Auxiliary definition
  (memory 1)

  (func $dummy)

  (func (export "empty")
    (block)
    (block $l)
  )

  (func (export "add") (param $x f64) (param $y f64) (result f64) (f64.add (local.get $x) (local.get $y)))

  (func (export "nearest") (param $x f64) (result f64) (f64.nearest (local.get $x)))

  (func (export "as-call_indirect-first") (result i32)
    (block (result i32)
      (call_indirect (type $check)
        (loop (result i32) (i32.const 1)) (i32.const 2) (i32.const 0)
      )
    )
  )
  (func (f64.const 1e308) drop)
)
    ` .trim(),
    language: Language.wat,
    text: true
  })
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAst({
    input: 'no .=%& # kÑ f=)+oo9t valid css  }{',
    language: Language.wat,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`extraneous input`), msg)
      }
    } 
  })
})

test('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  writeFileSync('tmp.json', o)
  const expected = [`<module_field text="(memory1)">
  <memory text="(memory1)">
    <memory_fields text="1">
      <memory_type text="1">`,
      
      `<module_field text="(func$dummy)">
      <func text="(func$dummy)">
        <bind_var text="$dummy">
        </bind_var> <func_fields>
          <func_fields_body>
            <func_result_body>
              <func_body>
              </func_body>`,
      
      `<inline_export text="(export\\"empty\\")">
      <name text="\\"empty\\"">
      </name>
    </inline_export>`,
      
      `<instr text="(block$l)">
      <expr text="(block$l)">
        <expr1 text="block$l">
          <bind_var text="$l">
          </bind_var>`,
      
      ` <plain_instr text="f64.add">
      </plain_instr> <expr text="(local.get$x)">
        <expr1 text="local.get$x">
          <plain_instr text="local.get$x">
            <var text="$x">
            </var>
          </plain_instr>`,
      
      `<instr_list text="(i32.const1)">
      <instr text="(i32.const1)">
        <expr text="(i32.const1)">
          <expr1 text="i32.const1">
            <plain_instr text="i32.const1">
              <literal text="1">
              </literal>`
]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
