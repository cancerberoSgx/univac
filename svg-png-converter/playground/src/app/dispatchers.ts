import { Example } from '../examples/examples';
import { svg2png, png2svg, urlToBase64, urlToData } from 'svg-png-converter';
import { getStore } from './store';

export async function convert(e: Example) {
  let output: string | undefined
  if (e.svg2png) {
    output = await svg2png({
      input: e.code,
      encoding: 'dataURL'
    })
  }
  else {
    output = await png2svg({
      input: urlToData(e.code),

    })
  }
  e.inputSize = e.code.length
  e.outputSize = (output || '').length
  return output||''
}