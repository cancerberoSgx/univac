import { RemoveProperties } from 'misc-utils-of-mine-generic'
import { BufferClass, PNG2SVGOptions, urlToBase64 } from 'svg-png-converter'
import { lisa_png } from './debug/panda_png'

export interface State {
  error?: Error | undefined;
  input: Image
  output: Image
  page: 'home' | 'loadImage' | 'editor' | 'download'
  editorTracer: 'imagetracer' | 'potrace',
  options: RemoveProperties<PNG2SVGOptions, 'input'>
  // potraceEasyOptions: PotraceEasyOptions
}

export async function getInitialState(): Promise<State> {
  return {
    error: undefined,
    page: 'home',
    editorTracer: 'imagetracer',
    input: {
      size: lisa_png.length,
      content: BufferClass.from(urlToBase64(lisa_png), 'base64'),
      name: 'lisa.png'
    },
    output: {
      size: 0,
      content: BufferClass.from(''),
      name: 'unnamed.png.svg',
    },
    options: {
      tracer: 'potrace',
      steps: 4, background: '#ffffff', color: '#000000', turdSize: 3
    },
    // potraceEasyOptions: {
    //   steps: 4,
    //   background: '#ffffff',
    //   foreground: '#000000',
    //   smallest: 2
    // }
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

// interface PotraceEasyOptions {
//   background: string|-1
//   foreground: string
//   steps: 1|2|3|4
//   smallest: number
// }
