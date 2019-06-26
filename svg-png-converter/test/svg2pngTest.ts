import test from 'ava'
import fileType from 'file-type'
import { readFileSync, writeFileSync } from 'fs'
import { svg2png } from '../src'
import { base64ToUrl, urlToBase64, urlToData } from '../src/base64'
import { BufferClass } from '../src/buffer'
import { svg } from './assets/code'

test('should render png and jpeg from literal SVG string input to raw binary strings', async t => {
  let s = await svg2png({ input: svg.trim(), encoding: 'raw', format: 'png' })
  t.deepEqual(fileType(BufferClass.from(s, 'binary')), { ext: 'png', mime: 'image/png' })
  writeFileSync("tmp22.png", BufferClass.from(s, 'binary'))
  t.deepEqual(readFileSync('test/assets/tmp22.png').toString('base64'), readFileSync('tmp22.png').toString('base64'))
  s = await svg2png({ input: svg.trim(), encoding: 'raw', format: 'jpeg' })
  t.deepEqual(fileType(BufferClass.from(s, 'binary')), { ext: 'jpg', mime: 'image/jpeg' })
  writeFileSync("tmp22.jpeg", BufferClass.from(s, 'binary'))
  t.deepEqual(readFileSync('test/assets/tmp22.jpeg').toString('base64'), readFileSync('tmp22.jpeg').toString('base64'))
})

test('should render png and jpeg buffer', async t => {
  let s = await svg2png({
    input: svg,
    encoding: 'buffer',
    format: 'png',
  })
  t.deepEqual(fileType(s), { ext: 'png', mime: 'image/png' })
  writeFileSync("tmp23.png", s)
})

test('should render png base64 string', async t => {
  let s = await svg2png({
    input: readFileSync('test/assets/tmp2.svg'),
    encoding: 'base64',
    format: 'png',
  })
  t.deepEqual(fileType(BufferClass.from(s, 'base64')), { ext: 'png', mime: 'image/png' })
  writeFileSync("tmp24.png", BufferClass.from(s, 'base64'))
  t.deepEqual(readFileSync('test/assets/tmp24.png.base64').toString(), s)
})

test('should render svg buffer to png buffer', async t => {
  let s = await svg2png({
    input: readFileSync('test/assets/tmp2.svg'),
    encoding: 'buffer',
    format: 'png',
  })
  t.deepEqual(fileType(s), { ext: 'png', mime: 'image/png' })
  t.deepEqual(readFileSync('test/assets/tmp25.png.buffer').toString('base64'), s.toString('base64'))
  writeFileSync("tmp25.png", s)
})

test('should render svg buffer to jpeg dataURL', async t => {
  let s = await svg2png({
    input: readFileSync('test/assets/tmp2.svg'),
    encoding: 'dataURL',
    format: 'jpeg',
  })
  const b = BufferClass.from(urlToData(s), 'binary')
  t.deepEqual(fileType(b), { ext: 'jpg', mime: 'image/jpeg' })
  t.deepEqual(readFileSync('test/assets/tmp26.jpg.dataUrl').toString(), s)
  writeFileSync("tmp26.jpg", urlToBase64(s), 'base64')
  t.deepEqual(readFileSync('test/assets/tmp26.jpg.dataUrl').toString(), base64ToUrl(readFileSync('tmp26.jpg').toString('base64'), 'image/jpeg'))
})

test('should render svg inline small text', async t => {
  let s = await svg2png({
    input: `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="632pt" height="91pt" viewBox="0.00 0.00 631.61 91.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 112)">
    <polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-112 58,-112 58,4 -4,4"/>
    <ellipse fill="none" stroke="#000000" cx="27" cy="-90" rx="27" ry="18"/>
    <text text-anchor="middle" x="27" y="-85.8" font-family="Times,serif" font-size="14.00" fill="#000000">a</text>
  </g>
</svg>
`.trim(),
    encoding: 'dataURL',
    format: 'jpeg',
    width: 100,
    height: 100,
    multiplier: .7,
    quality: .5
  })
  const b = BufferClass.from(urlToData(s), 'binary')
  t.deepEqual(fileType(b), { ext: 'jpg', mime: 'image/jpeg' })
  writeFileSync("tmp27.jpg", urlToBase64(s), 'base64')
  t.deepEqual(readFileSync('test/assets/tmp27.jpg').toString('base64'), urlToBase64(s))
  t.deepEqual(readFileSync('test/assets/tmp27.jpg').toString('base64'), readFileSync('tmp27.jpg').toString('base64'))
})
