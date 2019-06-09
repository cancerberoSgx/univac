import { isNode } from 'misc-utils-of-mine-generic'
import { promisify } from 'util'

const BrowserBuffer = require('buffer/').Buffer as typeof Buffer

export const BufferClass = isNode() ? Buffer : BrowserBuffer
// export function getBufferClass(){
//   return isNode() ? Buffer : BrowserBuffer
// }

var blobToBufferFn = require('blob-to-buffer')
type BlobToBufferFn = (b: Blob) => Promise<Buffer>
type BlobToBufferCb = (b: Blob, cb: (err: any, buffer: Buffer) => void) => void
export const blobToBuffer = promisify(blobToBufferFn as BlobToBufferCb) as BlobToBufferFn


export const typedArrayToBuffer = require('typedarray-to-buffer') as (a: Uint8Array) => Buffer

// var arr = new Uint8Array([1, 2, 3])
// arr = typedArrayToBuggert(arr)
