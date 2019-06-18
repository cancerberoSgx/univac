const blobToBuffer = require('blob-to-buffer')
// import  {Buffer} from 'buffer/'
import fetch, { Headers, Request } from 'node-fetch'

export async function fetchAsBuffer(url: string, headers?: Headers): Promise<Buffer> {
  var options = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  }
  var request = new Request(url)
  const response = await fetch(request, options)
  return await response.buffer()
  // const buffer = await blobToBuffer(blob) as Buffer
  // return buffer
}
