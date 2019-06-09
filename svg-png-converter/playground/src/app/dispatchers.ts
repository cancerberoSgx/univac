import { Example } from './examples';
import { svg2png, png2svg, urlToBase64, urlToData } from 'svg-png-converter';
import { getStore } from './store';

export async function convert(e: Example){
  if(e.svg2png){
    const output = await svg2png({
      input: e.code,
      encoding: 'dataURL'
    })
    // getStore().setState({output})
    return output
  }
  else {
      const output = await png2svg({
        input: urlToData(e.code), 
        
      })
      // getStore().setState({output})
      return output
  }
  return ''
}