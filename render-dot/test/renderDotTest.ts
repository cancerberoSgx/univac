import test from 'ava'
import { renderDot } from '../src/renderDot';
import { terminateLibrary } from '../src/library';

test.after(async t => {
  await terminateLibrary()
})

test('should render svg by default', async t => {
  const result = await renderDot({
    code: 'digraph { a -> b; }'
  })
  const expected = [`<polygon`, `<svg`]
  expected.forEach(e => t.true(result.includes(e)))
})
