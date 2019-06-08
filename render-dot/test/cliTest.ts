import test from 'ava'
import { execSync } from 'child_process'
import { readdirSync } from 'fs'

test('should output to stdout if no --output', async t => {
  const result = execSync('node bin/render-dot.js --input test/assets/C.blockItem.dot', { stdio: 'pipe' })
  const expected = [`<polygon`, `<svg`]
  expected.forEach(e => t.true(result.includes(e)))
})

test('should accept globs and output folder', async t => {
  const result = execSync('rm -rf tmp; mkdir -p tmp; node bin/render-dot.js --input "test/**/*.dot" --output tmp', { stdio: 'pipe' })
  // console.log(readdirSync('tmp'))
  t.deepEqual(readdirSync('tmp'), ['C.blockItem.dot.svg', 'JavaParser.classCreatorRest.dot.svg'])
})

test('should get code from --input', async t => {
  const result = execSync('node bin/render-dot.js --input "digraph { a -> b; }"', { stdio: 'pipe' })
  const expected = [`<polygon`, `<svg`]
  expected.forEach(e => t.true(result.includes(e)))
})
