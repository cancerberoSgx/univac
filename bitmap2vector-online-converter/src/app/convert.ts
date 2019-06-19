import { png2svg, optimizeSvg } from 'svg-png-converter'
import { BaseCreateImageOptions } from '../ui/common/uiUtil'
import { Image } from './state'
import { getStore } from './store'
import { sleep } from 'misc-utils-of-mine-generic';

export async function convert(e: Image) {
  const output = await png2svg({
    ...getStore().getState().options,
    input: e.content,
  })
  return output
}

export interface createImageOptions extends BaseCreateImageOptions {
  content: Buffer
}

export async function createImage(options: createImageOptions) {
  const input = {
    content: options.content,
    name: 'output.png',  
    size: options.content.byteLength,
  }
  const result = await convert(input)
  const output = { name: 'output.svg', content: Buffer.from(result.content), size: result.content.length }
  getStore().setState({
    input,
    output,
    ...options.extraState || {}
  })
}



export async function prepareDownload(){
  getStore().setState({page: 'download',optimizing: true})
  await sleep(10)
  const out = await optimizeSvg(getStore().getState().output.content.toString(), true)
  await sleep(10)  
  getStore().setState({page: 'download',output: {...getStore().getState().output, content: Buffer.from(out)},optimizing: false})
}
