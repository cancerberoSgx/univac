import test from 'ava'
import { existsSync, writeFileSync, readFileSync, unlinkSync } from 'fs';
import { rasterizeSVG } from '../src';
import { svg } from './code';
import { tryTo } from 'misc-utils-of-mine-generic';

test('should render svg by default', async t => {
 tryTo(()=>{
  unlinkSync('tmp22.png')
  unlinkSync('tmp22.jpeg')
 })

  t.false(existsSync('tmp22.png'))
  t.false(existsSync('tmp22.jpeg'))

  writeFileSync("tmp22.png", Buffer.from(await rasterizeSVG({ input: svg.trim(), encoding: 'raw', format: 'jpeg' }), 'binary'))
  writeFileSync("tmp22.jpeg", Buffer.from(await rasterizeSVG({ input: svg.trim(), encoding: 'raw', format: 'jpeg' }), 'binary'))

  t.true(existsSync('tmp22.png'))
  t.true(existsSync('tmp22.jpeg'))

})
