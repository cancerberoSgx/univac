import test from 'ava'
import { array } from 'misc-utils-of-mine-generic'
import { base64ToUrl, getDataUrlFileName, urlToBase64, urlToData } from "../src/base64"


const data2 = `Incididunt Lorem adipisicing ut irure. Eu nostrud Lorem ipsum consequat pariatur pariatur enim. Occaecat veniam occaecat eiusmod pariatur dolore non ea minim. Veniam do ea labore dolore.

Dolor nulla labore et sunt nulla excepteur ad. Exercitation anim ex quis dolore incididunt enim excepteur incididunt dolore sunt do irure minim aute. Id ut voluptate sit dolor id Lorem dolore nostrud esse nisi aute dolor minim. Sit ex cillum excepteur ad.

Elit nisi adipisicing laborum eiusmod ex nulla labore. Aute ea aute ex laborum reprehenderit excepteur amet commodo voluptate non enim anim ex. Ea excepteur ipsum dolore sit est labore sunt. Esse magna sunt elit dolore ex aliqua ea consectetur.`
' kljasdhfl akjsdhflkajsdhflkajhsdlkfjahsdlkfjh alksdjfh alksdj hflkasjdh lfaj zfd'

const data3 = array(13).map(i => String.fromCharCode(i + 255)).join()
const url1 = base64ToUrl(Base64.encode('a'), 'text/plain')
const url2 = base64ToUrl(Base64.encode(data2), 'text/plain', 'hello.txt')
const url3 = base64ToUrl(Base64.encode(data3), 'text/plain', 'contents 3')

test('urlToBase64 supports urls with and without names', async t => {
  t.deepEqual(urlToBase64(url1), Base64.encode('a'))
  t.deepEqual(urlToBase64(url2), Base64.encode(data2))
  t.deepEqual(urlToBase64(url3), Base64.encode(data3))
})

test('urlToData supports urls with and without names', async t => {
  t.deepEqual(urlToData(url1), 'a')
  t.deepEqual(urlToData(url2), data2)
})
test.skip('urlToData supports with binary files', async t => {
  t.deepEqual(urlToData(url3), data3)
})

test('getDataUrlFileName  without names', async t => {
  t.deepEqual(getDataUrlFileName(url1), undefined)
})
test('getDataUrlFileName  with names', async t => {
  t.deepEqual(getDataUrlFileName(url2), 'hello.txt')
})

test.skip('getDataUrlFileName  with binary files', async t => {
  t.deepEqual(getDataUrlFileName(url3), 'contents 3')
})
