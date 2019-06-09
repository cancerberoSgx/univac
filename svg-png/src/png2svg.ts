import { potracePosterize } from './potrace';
import { dataToBase64, dataToUrl, mimeTypes, getMimeTypeFromDataUrl, getFormatFromDataUrl, base64ToUrl, urlToBase64 } from './fabric';
import { PNG2SVGOptions } from './types';
import { blobToBuffer, BufferClass, typedArrayToBuffer } from './buffer';
import { isNode , inBrowser} from 'misc-utils-of-mine-generic';
import { isBase64 } from './misc';
// import { isBase64 } from './misc';


/**
 * Converts a PNG bitmap image to a SVG vector graphics. Other input supported  besides PNG/SVG are JPEG and BMP. 
 */
export async function png2svg(options: PNG2SVGOptions ){
  let buffer:Buffer|undefined
  if(  BufferClass.isBuffer(options.input)) {
buffer = options.input
  } 
  else if(!isNode() && typeof Blob !== 'undefined' && options.input instanceof Blob) {
    buffer = await blobToBuffer(options.input)
  }
  else if(typeof options.input ==='string' && options.input.startsWith('data:')) {
    buffer = BufferClass.from(urlToBase64(options.input), 'base64')
  }
  else if(typeof options.input ==='string' && isBase64(options.input)) {
    buffer = BufferClass.from(Base64.atob(options.input), 'binary')
  }
  else if (typeof options.input ==='string' ){
    buffer = BufferClass.from(options.input, 'binary')
  }
  else if (options.input instanceof Uint8Array && !BufferClass.isBuffer(options.input)) {
    buffer = typedArrayToBuffer(options.input)
  }
  if(!buffer){
    throw new Error('Invalid input option, must be one of Buffer|Uint8Array|Blob|data-url string|binary string')
  }
   const s = await potracePosterize(buffer, {...{ threshold: 180, steps: 4 }, ...options})
  // if(options.encoding==='base64'){
  //   return dataToBase64(s)
  // }
  // else if(options.encoding==='dataURL'){
  //   const format = options.inputFormat || getFormatFromDataUrl(options.input)
  //   const mimeType = format && mimeTypes[format]
  //   if(!mimeType) {
  //     throw new Error('Input Format unrecognized. Please declare input format using --inputFormat option')
  //   }
  //   return dataToUrl(s, mimeType)
  // }
  // else {
    return s
  // }
}