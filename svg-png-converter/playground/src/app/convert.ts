import { png2svg, svg2png, urlToData, SVG2PNGOptions, PNG2SVGOptions } from 'svg-png-converter'
import { Example, examples } from '../examples/examples'
import { getFileExtension, getFileNameFromUrl } from 'misc-utils-of-mine-generic';
import { getStore } from './store';
import { State } from './state';

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
  return output || ''
}

let svg2pngOptions: SVG2PNGOptions
let png2svgOptions: PNG2SVGOptions
export function getLastConversionOptions(svg2png=true){
  return svg2png ? svg2pngOptions : png2svgOptions
// if(svg2png){
  // if(!svg2pngOptions){
    // svg2pngOptions = examples.find(e=>!!e.svg2png)!.svg2png
  // }
// }
}
interface O{
  dataUrl:string, 
  // fileName?:string, 
  // mimeType?:string, 
  extraState?: Partial<State>
convert?: boolean
  extra?: Partial<SVG2PNGOptions|PNG2SVGOptions>
}
export async function  createExample(o: O){
  const name = getFileNameFromUrl(o.dataUrl)
  const svg2png = name&&getFileExtension(name)=== 'svg'
  const example = {
    name ,
    description: 'new input',
    outputName: name + (svg2png ? '.png' : '.svg'),
    inputSize: o.dataUrl.length,
    svg2png: svg2png ?{...svg2pngOptions, input: o.dataUrl}: undefined,
    png2svg: svg2png ? undefined : {...png2svgOptions, input: o.dataUrl},
    ...o.extra
  }
  const output = o.convert ? await convert(example) : getStore(). getState().output
  const nextState = { example, output, examples:[...getStore(). getState().examples, example], ...o.extraState||{}}
  getStore().setState(nextState) 
return nextState

}


export function getCode(e: Example){
  return e.svg2png ? e.svg2png.input! : e.png2svg && e.png2svg.input ||''
}