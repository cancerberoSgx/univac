import { png2svg, svg2png, urlToData } from 'svg-png-converter'
import { Example } from '../examples/examples'

export async function convert(e: Example) {

  const input = e.code.startsWith('data:') ? urlToData(e.code) : e.code
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

  e.inputSize = e.code.length
  e.outputSize = (output || '').length
  return output || ''
}

