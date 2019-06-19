import test from 'ava'
import { readFileSync, writeFileSync } from 'fs'
import { png2svg } from '../src'

test('should shrink when optimize option passed with potrace and png input', async t => {
  const r1 = await png2svg({ tracer: 'potrace', input: readFileSync('test/assets/lisa.png') })
  t.true(!!r1)
  const r2 = await png2svg({ tracer: 'potrace', input: readFileSync('test/assets/lisa.png'), optimize: true, debug: true })
  t.true(r2.content.includes('<svg') && r1.content.includes('<svg'))
  t.true(r2.content.length < r1.content.length)
  writeFileSync('tmp_svgo11.svg', r1.content)
  writeFileSync('tmp_svgo12.svg', r2.content)
})

test('should  shrink output with imagetracer and jpeg input', async t => {
  const r1 = await png2svg({ tracer: 'imagetracer', input: readFileSync('test/assets/tmp22.jpeg') })
  const r2 = await png2svg({ tracer: 'imagetracer', input: readFileSync('test/assets/tmp22.jpeg'), optimize: true, debug: true })
  t.true(r2.content.includes('<svg') && r1.content.includes('<svg'))
  t.true(r2.content.length < r1.content.length)
  writeFileSync('tmp_svgo21.svg', r1.content)
  writeFileSync('tmp_svgo22.svg', r2.content)
})
