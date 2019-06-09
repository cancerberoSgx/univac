// const BrowserBuffer = 
// (window as any).Buffer = (self as any).Buffer = require('buffer/').Buffer as typeof Buffer
// import {BufferClass} from 'svg-png-converter'


// import { isNode } from 'misc-utils-of-mine-generic';
// if(!isNode()){
// debugger

// (window as any).Buffer = (self as any).Buffer = require('buffer/').Buffer  ;
// (window as any).Jimp = (self as any).Jimp = require('jimp/index')

// var Jimp = require('jimp')  as any
// (window as any).Jimp = (self as any).Jimp = Jimp

// debugger
// }


import * as React from 'react'
import { render } from 'react-dom'
import { getInitialState } from './app/state'
import { _setStore } from './app/store'
import { App } from './ui/app'
async function main() {
  const s = await getInitialState()
  _setStore(s)
  render(<App />, document.getElementById('main'))
}

main()
