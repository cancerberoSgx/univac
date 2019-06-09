import { fabric } from 'fabric'
import { IImageOptions, Image } from 'fabric/fabric-impl'
import { promisify } from 'util'
import { Format } from './types'
import { Base64 } from 'js-base64'

export const fabricImageFromUrl = promisify(function(url: string, imgOptions: IImageOptions, callback: (err: NodeJS.ErrnoException | null, data: Image) => void): void {
  fabric.Image.fromURL(url, (image) => {
    callback(null, image)
  }, imgOptions)
})

export async function fabricImageFromData(data: any, format: Format): Promise<Image> {
  return await fabricImageFromUrl(dataToUrl(data, mimeTypes[format]), {})
}

export const mimeTypes: {[k:string]:string} = {
  svg: 'image/svg+xml',
  png: 'image/png',
  jpeg: 'image/jpeg'
}

export function getMimeTypeFromDataUrl(url: string){
  const f = getFormatFromDataUrl(url)
  return f&& mimeTypes[f]
}
export function getFormatFromDataUrl(url: string){
  return Object.keys(mimeTypes).find(k=>!!mimeTypes[k] && url.includes(mimeTypes[k]))
}

export function dataToUrl( data: string, mimeType: string) {
  return base64ToUrl(dataToBase64(data), mimeType)
}

export function dataToBase64(data: string): string {
  return Base64.encode(data)
}

export function base64ToUrl(base64: string, mimeType: string): string {
  return `data:${mimeType};base64,${base64}`;
}

export function urlToBase64(s: string) {
  return s.substring(s.indexOf(';base64,') + ';base64,'.length);
}

export function urlToData(s: string) {
  return Base64.atob(urlToBase64(s));
}

