import test from 'ava'
import { base64ToUrl, getDataUrlFileName, urlToBase64, urlToData } from "../src/base64"

const url1 = base64ToUrl(Base64.encode('a'), 'text/plain')
const url2 = base64ToUrl(Base64.encode('a'), 'text/plain', 'hello.txt')

test('urlToBase64 supports urls with and without names', async t => {
  t.deepEqual(urlToBase64(url1), Base64.encode('a'))
  t.deepEqual(urlToBase64(url2), Base64.encode('a'))
})

test('urlToData supports urls with and without names', async t => {
  t.deepEqual(urlToData(url1), 'a')
  t.deepEqual(urlToData(url2), 'a')
})

test('getDataUrlFileName  without names', async t => {
  t.deepEqual(getDataUrlFileName(url1), undefined)
})
test('getDataUrlFileName  with names', async t => {
  t.deepEqual(getDataUrlFileName(url2), 'hello.txt')
})
