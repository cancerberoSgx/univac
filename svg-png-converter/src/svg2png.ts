import { fabric } from 'fabric'
import { urlToBase64, urlToData } from "./base64"
import { fabricImageFromData } from "./fabric"
import { SVG2PNGOptions } from './types'

interface EncodingValueMap {
  dataURL: string,
  base64: string,
  raw: string
  buffer: Buffer
}

/**
 * Rasterize given svg to PNG or JPEG bitmap image.  
 */
export async function svg2png<E extends keyof EncodingValueMap, T = EncodingValueMap[E]>(options: SVG2PNGOptions<E>): Promise<T> {
  options.debug && console.log(`Options: ${JSON.stringify({ ...options, input: null })}`)

  var canvas = new fabric.Canvas('c')
  const data = typeof options.input === 'string' ? options.input : options.input.toString()
  // debugger
  const img = await fabricImageFromData(data, 'svg')
  canvas.add(img)
  // debugger
  const s = canvas.toDataURL({ height: img.height, width: img.width, ...options, format: options.format || 'png' })//as any as T
  // console.log('SJSJSJSJSJSJ', s);

  if (options.encoding === 'dataURL') {
    return s as unknown as T
  }
  else if (options.encoding === 'base64') {
    return urlToBase64(s) as unknown as T
  }
  else if (options.encoding === 'buffer') {
    return Buffer.from(urlToBase64(s), 'base64') as unknown as T
  }
  else {
    return urlToData(s) as unknown as T
  }
}
