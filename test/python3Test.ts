import test from 'ava'
import { printNode } from '../src'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'


let result: Node
test.before(async t => {
  result = await parseAst({
    input: `
def _future_repr_info(future):
  # (Future) -> str
  """helper function for Future.__repr__"""
  info = [future._state.lower()]
  if future._state == _FINISHED:
    if future._exception is not None:
      info.append('exception={!r}'.format(future._exception))
    else:
      # use reprlib to limit the length of the output, especially
      # for very long strings
      result = reprlib.repr(future._result)
      info.append('result={}'.format(result))
  if future._callbacks:
    info.append(_format_callbacks(future._callbacks))
  if future._source_traceback:
    frame = future._source_traceback[-1]
    info.append('created at %s:%s' % (frame[0], frame[1]))
  return info
`.trim(),
    language: Language.python3
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
    input: '--  -- `` [[ ``  ^ j + + o j+ o . Ñ  jo . 123 ( % ) . .',
    language: Language.python3
  }))
})

test.skip('should report syntax errors to given listener', async t => {
  await parseAst({
    input:  '-- ',
    language: Language.python3,
    errorListener: {
      syntaxError(a,b,c,d,msg){
        t.true(msg.includes(`mismatched input`)||msg.includes(`extraneous input`), msg)
      }
    }
  })
})
test('generate correct ast', async t => {
  const o = printNode({
    node: await parseAst({
      input: `
a=1
def f:
  if a==1 and 2.2 > 'e' or not True:
    print 'sdf'`,
      language: Language.python3,
      text: true
    })
  })

  const expected = [`<and_test text="a==1and2.2>'e'">`, `<atom text="2.2">`, `<not_test text="True">`, `<or_test text="a==1and2.2>'e'ornotTrue">`, `<str text="'e'">`, `<integer text="1">`, `<integer text="1">`]
  expected.forEach(e => t.true(o.includes(e), e))

  t.is(1, 1)
})
