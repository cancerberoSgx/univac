import { getFileExtension, getFileNameFromUrl } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { blobToBuffer, PNG2SVGOptions, SVG2PNGOptions } from 'svg-png-converter'
import { createImage } from '../../app/convert'
import { State } from '../../app/state'
import fileType = require('file-type')

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


export interface BaseCreateImageOptions {
  extraState?: Partial<State>
  // convert?: boolean
  extra?: Partial<SVG2PNGOptions | PNG2SVGOptions>
  name: string
}

export interface createImageDocumentOptions extends BaseCreateImageOptions {
  url: string
}

export async function fetchImageDocument(options: createImageDocumentOptions) {
  const buffer = await fetchAsBuffer(options.url)
  const fileNme = getFileNameFromUrl(options.url)
  let t = fileType(buffer)
  const mimeType = t && t.mime || fileNme && getFileExtension(fileNme) && getFileNameFromUrl(getFileExtension(fileNme))
  // const dataUrl = base64ToUrl(buffer.toString('base64'), mimeType, fileNme)
  const doc = createImage({ ...options, content: buffer, name: fileNme })
  return doc
}
