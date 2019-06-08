import test from 'ava'
import { execSync } from 'child_process'

test('should output to stdout if no --output', async t => {
  const result = execSync('node bin/render-dot.js --input test/assets/C.blockItem.dot', { stdio: 'pipe' })
  const expected = [`<polygon`, `<svg`]
  expected.forEach(e => t.true(result.includes(e)))
})

test('should get code from --input', async t => {
  const result = execSync('node bin/render-dot.js --input "digraph { a -> b; }"', { stdio: 'pipe' })
  const expected = [`<polygon`, `<svg`]
  expected.forEach(e => t.true(result.includes(e)))
})
