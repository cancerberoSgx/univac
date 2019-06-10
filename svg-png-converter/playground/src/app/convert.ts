import { getFileExtension, getFileNameFromUrl } from 'misc-utils-of-mine-generic'
import { png2svg, PNG2SVGOptions, svg2png, SVG2PNGOptions, urlToData } from 'svg-png-converter'
import { Example } from '../examples/examples'
import { BaseCreateImageOptions } from '../ui/common/uiUtil'
import { getStore } from './store'

export async function convert(e: Example) {
  const input = getCode(e).startsWith('data:') ? urlToData(getCode(e)) : getCode(e)
  let output: string | undefined
  if (e.svg2png) {
    output = await svg2png({
      ...e.svg2png,
      input,
      encoding: 'dataURL',
    })
  }
  else {
    output = await png2svg({
      ...e.png2svg,
      input
    })
  }
  e.inputSize = getCode(e).length
  e.outputSize = (output || '').length
  e.outputName = getFileNameFromUrl(getCode(e))||e.name+'.'+(e.svg2png && e.svg2png.format||'png')
  return output || ''
}

let svg2pngOptions: SVG2PNGOptions
let png2svgOptions: PNG2SVGOptions
export function getLastConversionOptions(svg2png = true) {
  return svg2png ? svg2pngOptions : png2svgOptions
  // if(svg2png){
  // if(!svg2pngOptions){
  // svg2pngOptions = examples.find(e=>!!e.svg2png)!.svg2png
  // }
  // }
}


export interface createExampleOptions extends BaseCreateImageOptions {
  dataUrl: string,
}
export async function createExample(options: createExampleOptions) {
  const name = getFileNameFromUrl(options.dataUrl)
  const svg2png = name && getFileExtension(name) === 'svg'
  const example = {
    name,
    description: 'new input',
    outputName: name + (svg2png ? '.png' : '.svg'),
    inputSize: options.dataUrl.length,
    svg2png: svg2png ? { ...svg2pngOptions, input: options.dataUrl } : undefined,
    png2svg: svg2png ? undefined : { ...png2svgOptions, input: options.dataUrl },
    ...options.extra
  }
  const output = options.convert ? await convert(example) : getStore().getState().output
  const nextState = {
    example,
    output,
    examples: [...getStore().getState().examples, example]
    , ...options.extraState || {}
  }
  getStore().setState(nextState)
  return nextState

}


export function getCode(e: Example) {
  return e.svg2png ? e.svg2png.input! : e.png2svg && e.png2svg.input || ''
}
