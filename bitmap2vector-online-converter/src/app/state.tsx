import { convert } from './convert'
import { SVG2PNGOptions, BufferClass } from 'svg-png-converter';
import { RemoveProperties } from 'misc-utils-of-mine-generic';

export interface State {
  error?: Error | undefined;
  input: Image
  output: Image
  page: 'home'|'loadImage'|'editor'|'download'
  options: RemoveProperties<SVG2PNGOptions, 'input'>
}

export async function getInitialState(): Promise<State> {
  return {
    error: undefined,
    page: 'editor',
    input: {
      size: 0, 
      content: BufferClass.from(''), 
      name: 'unnamed.png'
    },
    output: {
      size: 0,
      content: BufferClass.from(''), 
      name: 'unnamed.png.svg'
    },
    options: {

    }
  }
}

export interface Image {
  size: number
  // outputSize?: number
  // outputName?: string
  name: string
  content: Buffer
  // options: SVG2PNGOptions
}