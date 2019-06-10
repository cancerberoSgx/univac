import * as React from 'react'
import {blobToBuffer, PNG2SVGOptions, SVG2PNGOptions, base64ToUrl} from 'svg-png-converter'
import fileType = require('file-type');
import { getFileNameFromUrl } from 'misc-utils-of-mine-generic';
import { getFileExtension } from 'misc-utils-of-mine-generic';
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

export async function loadUrl() {
  if (window.location.hash.includes('state=')) {
    const d = window.location.hash.split('state=')[1]
    const {imageUrl, options} = JSON.parse(atob(d)) as {imageUrl: string, options: SVG2PNGOptions | PNG2SVGOptions}
    // setCodeEditorText(state.code)
    // const {imageUrl, options} = 

    const dataUrl = await fetchAsBuffer(imageUrl)
    
  } else {
  }
}


export async function fetchAsBuffer(url: string, headers?: Headers){
  // var url = 'https://ronreiter-meme-generator.p.mashape.com/meme?meme=Baby+Godfather&font_size=50&font=Impact&top=Thanks+m&bottom=Later';
// var headers = new Headers({'X-Mashape-Key': 'API_KEY'});
var options : RequestInit = {
  method: 'GET',
  headers: headers,
  mode: 'cors',
  cache: 'default'
}  
var request = new Request(url);
const response = await fetch(request, options)
// .then(() => {
  const blob = await response.blob()
  // .then((blob) => {
    const buffer = await blobToBuffer(blob)
    return buffer
    // var base64Flag = 'data:image/jpeg;base64,';
    // var imageStr = arrayBufferToBase64(buffer);
    // resolve(k
    // document.querySelector('img').src = base64Flag + imageStr;
  // })
// })

}



export async function fetchImageDocument(url:string) {
  // const url = e.currentTarget.value;
  // if(!fileNme){
  //   // throw new Error('Sorry, a file Name cannot be extracted from t')
  // }
  // const u = new URL(val)
  const buffer = await fetchAsBuffer(url);
  const fileNme = getFileNameFromUrl(url);
  let t = fileType(buffer);
  const mimeType = t && t.mime || fileNme && getFileExtension(fileNme) && getFileNameFromUrl(getFileExtension(fileNme));
  const dataUrl = base64ToUrl(buffer.toString('base64'), mimeType, fileNme);
  return dataUrl;
}