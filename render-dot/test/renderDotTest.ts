import test from 'ava'
import { readFileSync } from 'fs'
import { terminateLibrary } from '../src/library'
import { renderDot } from '../src/renderDot'

test.after(async t => {
  await terminateLibrary()
})

test('should render svg by default', async t => {
  const result = await renderDot({
    input: 'digraph { a -> b; }'
  })
  const expected = [`<polygon`, `<svg`]
  expected.forEach(e => t.true(result.includes(e)))
})


test('should render png', async t => {
  const result = await renderDot({
    input: 'digraph { a -> b; }',
    format: 'png'
  })
  // writeFileSync('tmp.png', result, 'binary')
  const expected = readFileSync('test/assets/expectedOutput.png').toString('binary')
  t.deepEqual(expected, result)
})



test('should render ps', async t => {
  const result = await renderDot({
    input: 'digraph { a -> b; }',
    format: 'ps'
  })
  // writeFileSync('tmp.ps', result, 'binary')
  const expected = readFileSync('test/assets/expectedOutput.ps').toString('binary')
  t.deepEqual(expected, result)
})
