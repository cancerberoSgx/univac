import * as React from 'react'
import {blobToBuffer} from 'svg-png-converter'
import { resolve } from 'url';
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

export function iconForNodeKind(kind = '') {
  kind = kind.toLowerCase()
  if (['method', 'member', 'property', 'constructor'].find(s => kind.includes(s))) {
    return 'cube'
  }
  if (['type', 'interface', 'alias'].find(s => kind.includes(s))) {
    return 'cog'
  }
  if (['import', 'export'].find(s => kind.includes(s))) {
    return 'map'
  }
  if (kind.includes('jsx')) {
    return 'code'
  }
  if (kind.includes('declaration')) {
    return 'puzzle piece'
  }
  else {
    return 'leaf'
  }
}

export function createUrl() {
  const s = {
    code: ''//getCodeEditorText(),
  }
  const b = btoa(JSON.stringify(s))
  window.location.hash = '#state=' + b
}

export function loadUrl() {
  if (window.location.hash.includes('state=')) {
    const d = window.location.hash.split('state=')[1]
    const state = JSON.parse(atob(d))
    // setCodeEditorText(state.code)
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
