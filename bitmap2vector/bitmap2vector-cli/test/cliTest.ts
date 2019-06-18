import test from 'ava'
import { execSync } from 'child_process'
import { existsSync, readFileSync } from 'fs'

test('should build', async t => {
  t.notThrows(() => execSync('npm run build', { stdio: 'pipe' }))
})

test('should render png', async t => {
  t.false(existsSync('tmp/1/panda.png.svg'))
  const r = execSync('node bin/bitmap2vector.js --input test/assets/panda.png --output tmp/1', { stdio: 'pipe' })
  t.true(readFileSync('tmp/1/panda.png.svg').toString().includes('<svg'))
})
