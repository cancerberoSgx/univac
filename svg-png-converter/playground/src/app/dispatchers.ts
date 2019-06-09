import { png2svg, svg2png, urlToData } from 'svg-png-converter'
import { Example } from '../examples/examples'

export async function convert(e: Example) {
  let output: string | undefined
  if (e.svg2png) {
    output = await svg2png({
      ...e.svg2png,
      input: e.code,
      encoding: 'dataURL',
    })
  }
  else {
    output = await png2svg({
      ...e.png2svg,
      input: e.code.startsWith('data:') ? e.code : urlToData(e.code),
    })
  }

  e.inputSize = e.code.length
  e.outputSize = (output || '').length
  console.log({ ...e.png2svg, ...e.svg2png, input: null })
  return output || ''
}
