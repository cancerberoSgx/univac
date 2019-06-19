import test from 'ava'
import { execSync } from 'child_process'
import { existsSync, readFileSync } from 'fs'

test.before('should build', async t => {
  t.notThrows(() => execSync('npm run build', { stdio: 'pipe' }))
})

test('should render png', async t => {
  t.false(existsSync('tmp/1/panda.png.svg'))
  execSync('node bin/bitmap2vector.js --input test/assets/panda.png --output tmp/1', { stdio: 'pipe' })
  t.true(readFileSync('tmp/1/panda.png.svg').toString().includes('<svg'))
})

test('should support globs', async t => {
  t.false(existsSync('tmp/3/panda.png.svg'))
  t.false(existsSync('tmp/3/bluebells.jpg.svg'))
  const r = execSync('node bin/bitmap2vector.js --input "test/**/*.j*" --output tmp/3 --debug', { stdio: 'pipe' })
  console.log(r.toString())

  t.false(existsSync('tmp/3/panda.png.svg'))
  t.true(readFileSync('tmp/3/bluebells.jpg.svg').toString().includes('<svg'))

})
