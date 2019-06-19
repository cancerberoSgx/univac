import test from 'ava'
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs'
import { tryTo } from 'misc-utils-of-mine-generic'
import { png2svg } from '../src'

test('should render svg form png and jpeg buffer ', async t => {
  tryTo(() => {
    unlinkSync('tmp4411.svg')
  })
  t.false(existsSync('tmp4411.svg'))
  const result = await png2svg({ tracer: 'imagetracer', input: readFileSync('test/assets/tmp2.png') })
  writeFileSync("tmp4411.svg", result.content)
  t.true(readFileSync('tmp4411.svg').toString().includes('<svg'))
})
