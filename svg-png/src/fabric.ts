import { fabric } from 'fabric'
import { IImageOptions, Image } from 'fabric/fabric-impl'
import { promisify } from 'util'
import { dataToUrl } from './base64'
import { mimeTypes } from './mimeTypes'
import { Format } from './types'

export const fabricImageFromUrl = promisify(function(url: string, imgOptions: IImageOptions, callback: (err: NodeJS.ErrnoException | null, data: Image) => void): void {
  fabric.Image.fromURL(url, (image) => {
    callback(null, image)
  }, imgOptions)
})

export async function fabricImageFromData(data: string, format: Format, options: IImageOptions = {}): Promise<Image> {
  const f = dataToUrl(data, mimeTypes[format])
  // debugger
  return await fabricImageFromUrl(f, options)
}



