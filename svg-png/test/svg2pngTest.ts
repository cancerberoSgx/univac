import test from 'ava'
import { existsSync, unlinkSync, writeFileSync } from 'fs'
import { tryTo } from 'misc-utils-of-mine-generic'
import { svg2png } from '../src'
import { svg } from './assets/code'

test('should render png and jpeg', async t => {
  tryTo(() => {
    unlinkSync('tmp22.png')
    unlinkSync('tmp22.jpeg')
  })

  t.false(existsSync('tmp22.png'))
  t.false(existsSync('tmp22.jpeg'))

  let s = await svg2png({ input: svg.trim(), encoding: 'raw', format: 'jpeg' })
  t.true(s.length>100)
  writeFileSync("tmp22.png", Buffer.from(s), 'binary')
  t.true(existsSync('tmp22.png'))

  s = await svg2png({ input: svg.trim(), encoding: 'raw', format: 'jpeg' })
  t.true(s.length>100)
  writeFileSync("tmp22.jpeg", Buffer.from(s, 'binary'))
  t.true(existsSync('tmp22.jpeg'))
})
