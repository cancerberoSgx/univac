import test from 'ava'
import { readFileSync, writeFileSync } from 'fs'
import { svg2png } from '../src'
import { urlToBase64, urlToData } from '../src/base64'
import { BufferClass } from '../src/buffer'
import { svg } from './assets/code'
const fileType = require('file-type')

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
  t.deepEqual(readFileSync('test/assets/tmp26.jpg.dataUrl').toString(), s.toString())
  writeFileSync("tmp26.jpg", urlToBase64(s), 'base64')
})
