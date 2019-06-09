import { fabric } from 'fabric'
import { fabricImageFromData, urlToBase64, urlToData } from "./fabric"
import { SVG2PNGOptions } from './types'

/**
 * Rasterize given svg to PNG or JPEG bitmap image.  
 */
export async function svg2png(options: SVG2PNGOptions) {
  var canvas = new fabric.Canvas('c')
  canvas.add(await fabricImageFromData(options.input, 'svg'))
  const s = canvas.toDataURL({ format: options.format || 'png' })
  if (options.encoding === 'dataURL') {
    return s
  } else if (options.encoding === 'base64') {
    return urlToBase64(s)
  }
  else {
    return urlToData(s)
  }
}