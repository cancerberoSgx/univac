import test from 'ava'
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { bitmap2vector } from '../src';
test('should parse PNG', async t => {
  const out = await bitmap2vector({
    input: readFileSync('test/assets/panda.png')
  })
  t.true(out.svg.includes('<svg'))
  writeFileSync('tmp.svg', out.svg)
})

test('should parse JPG', async t => {
  const out = await bitmap2vector({
    input: readFileSync('test/assets/bluebells.jpg')
  })
  t.true(out.svg.includes('<svg'))
  writeFileSync('tmp2.svg', out.svg)
})

test('should parse from image path', async t => {
  const out = await bitmap2vector({
    input: 'test/assets/bluebells.jpg'
  })
  t.true(out.svg.includes('<svg'))
  writeFileSync('tmp3.svg', out.svg)
})

