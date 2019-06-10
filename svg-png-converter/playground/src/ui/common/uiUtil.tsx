import { getFileExtension, getFileNameFromUrl, getMimeTypeForExtension } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { base64ToUrl, blobToBuffer, PNG2SVGOptions, SVG2PNGOptions } from 'svg-png-converter'
import fileType = require('file-type')
import { convert } from '../../app/convert';
export function width() {
  return document.body.clientWidth
}

export function height() {
  return window.screen.height
}

export function isDesktop() {
  return width() >= 1023
}

export const Space = () => (
  <span style={{ marginRight: '0.5em' }}></span>
)


export function createUrl() {
  const s = {
    code: ''//getCodeEditorText(),
  }
  const b = btoa(JSON.stringify(s))
  window.location.hash = '#state=' + b
}

export async function loadUrl(url=window.location.hash) {
  if (window.location.hash.includes('state=')) {
    const d = url.split('state=')[1]
    const { imageUrl, options } = JSON.parse(atob(d)) as { imageUrl: string, options: SVG2PNGOptions | PNG2SVGOptions }
    const member = (options as any).svg2png||(options as any).png2svg
    if(!member) {
      throw new Error('Cannot retrieve image document options from url. aborting')
    }
const example ={...options, ...{input: (options as any).svg2png ?(options as any) .input : (options as any).png2svg  }}
const result = await convert(example as any)
    // convert(options)
    // const buffer = await fetchAsBuffer(imageUrl)
    // const dataUrl =base64ToUrl( buffer.toString('base64'), getFileNameFromUrl(url))
  } else {
  }
}


export async function fetchAsBuffer(url: string, headers?: Headers) {
  var options: RequestInit = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  }
  var request = new Request(url)
  const response = await fetch(request, options)
  const blob = await response.blob()
  const buffer = await blobToBuffer(blob)
  return buffer
}



export async function fetchImageDocument(url: string) {
  const buffer = await fetchAsBuffer(url)
  const fileNme = getFileNameFromUrl(url)
  let t = fileType(buffer)
  const mimeType = t && t.mime || fileNme && getFileExtension(fileNme) && getFileNameFromUrl(getFileExtension(fileNme))
  const imageUrl=  base64ToUrl(buffer.toString('base64'), mimeType, fileNme) 
}

// function getMimeTypeFromUrl(url:string){
//  const name = getFileNameFromUrl(url)
//  if(name){
//    return getmime
//  }
// }