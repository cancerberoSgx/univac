import { getFileExtension, getFileNameFromUrl } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { base64ToUrl, blobToBuffer, PNG2SVGOptions, SVG2PNGOptions } from 'svg-png-converter'
import { convert, createExample } from '../../app/convert'
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


export function createUrl() {
  const s = {
    code: ''//getCodeEditorText(),
  }
  const b = btoa(JSON.stringify(s))
  window.location.hash = '#state=' + b
}

export async function loadUrl(url = window.location.hash) {
  if (window.location.hash.includes('state=')) {
    const d = url.split('state=')[1]
    const { imageUrl, options } = JSON.parse(atob(d)) as { imageUrl: string, options: SVG2PNGOptions | PNG2SVGOptions }
    const member = (options as any).svg2png || (options as any).png2svg
    if (!member) {
      throw new Error('Cannot retrieve image document options from url. aborting')
    }
    const doc = { ...options, ...{ input: (options as any).svg2png ? (options as any).input : (options as any).png2svg } }
    const result = await convert(doc as any)
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


export interface BaseCreateImageOptions {
  extraState?: Partial<State>
  convert?: boolean
  extra?: Partial<SVG2PNGOptions | PNG2SVGOptions>
  name?: string
}

export interface createImageDocumentOptions extends BaseCreateImageOptions {
  url: string
}

export async function fetchImageDocument(options: createImageDocumentOptions) {
  const buffer = await fetchAsBuffer(options.url)
  const fileNme = getFileNameFromUrl(options.url)
  let t = fileType(buffer)
  const mimeType = t && t.mime || fileNme && getFileExtension(fileNme) && getFileNameFromUrl(getFileExtension(fileNme))
  const dataUrl = base64ToUrl(buffer.toString('base64'), mimeType, fileNme)
  const doc = createExample({ ...options, dataUrl, name: fileNme })
  return doc
}
