import { getFileExtension, getFileNameFromUrl } from 'misc-utils-of-mine-generic'
import { png2svg, PNG2SVGOptions, svg2png, SVG2PNGOptions, urlToData } from 'svg-png-converter'
import { BaseCreateImageOptions } from '../ui/common/uiUtil'
import { getStore } from './store'
import { Image } from './state';


export async function convert(e: Image) {
  // const input = e.content.startsWith('data:') ? urlToData(e.content) : e.content
  // let output: string | undefined
  // if (e.svg2png) {
  //   output = await svg2png({
  //     ...e.options,
  //     input,
  //     encoding: 'dataURL',
  //   })
  // }
  // else {
   const output = await png2svg({
      ... getStore().getState().options,
      input: e.content, 
    })
  // }

  // getStore().getState().output.size = (output || '').length
  // getStore().getState().output.name= getStore().getState().output.name|| getFileNameFromUrl(e.content) || e.name + '.' + (getStore().getState().options.format )
  return output  
}

// let svg2pngOptions: SVG2PNGOptions
// let png2svgOptions: PNG2SVGOptions
// export function getLastConversionOptions(svg2png = true) {
//   return svg2png ? svg2pngOptions : png2svgOptions
// }

export interface createImageOptions extends BaseCreateImageOptions {
  // dataUrl: string,
  content: Buffer
}

export async function createImage(options: createImageOptions) {
  // const name = options.name || getFileNameFromUrl(options.dataUrl)
  // const svg2png = name && getFileExtension(name) === 'svg'
  const input = {
    // name,
    content: options.content,
    // content: options.dataUrl,
    // description: 'new input',
    name: 'output.png', // TODO: getFileNameFromUrl issue
    size: options.content.byteLength,
    // svg2png: svg2png ? { ...svg2pngOptions, input: options.dataUrl } : undefined,
    // options: { ...png2svgOptions, input: options.dataUrl },
    // ...options.extra
  }
  const result = await convert(input)
  const output =  {name: 'output.svg', content: Buffer.from(result.content) , size: result.content.length} 
  // const nextState = 
  getStore().setState({
    input,
    output,
    // options
    // Images: [...getStore().getState().Images, Image]
     ...options.extraState || {}
  })
  // return nextState
}

// export function getCode(e: Image) {
//   return e.svg2png ? e.svg2png.input! : e.png2svg && e.png2svg.input || ''
// }
