import test from 'ava'
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs'
import { tryTo } from 'misc-utils-of-mine-generic'
import { png2svg } from '../src'

test('should render svg form png and jpeg buffer ', async t => {
  tryTo(() => {
    unlinkSync('tmp4411.svg')
  })
  t.false(existsSync('tmp4411.svg'))
  writeFileSync("tmp4411.svg", await png2svg({ tracer: 'imagetracer', input: readFileSync('test/assets/tmp2.png') }))
  t.true(readFileSync('tmp4411.svg').toString().includes('<svg'))
})
