import test from 'ava'
import { execSync } from 'child_process'
import { languages } from '../src'

test('should output valid json to stdout if no --output', async t => {
  const r = execSync('node bin/univac.js --input test/assets/python1.py --language python3 ', { stdio: 'pipe' })
  t.is(JSON.parse(r.toString()).children.length, 1)
})

test('should list languages --listLanguages', async t => {
  const r = execSync('node bin/univac.js --listLanguages', { stdio: 'pipe' })
  t.true(r.toString().includes('Supported Languages:'))
  languages.forEach(l => {
    t.true(r.toString().includes(l))
  })
})

test('should get code from --input', async t => {
  const r = execSync('node bin/univac.js --input "int main() {}" --language c', { stdio: 'pipe' })
  t.is(JSON.parse(r.toString()).children.length, 1)
})
