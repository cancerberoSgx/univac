import test from 'ava'
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
