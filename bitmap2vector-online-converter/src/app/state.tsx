import { RemoveProperties } from 'misc-utils-of-mine-generic'
import { BufferClass, PNG2SVGOptions, urlToBase64 } from 'svg-png-converter'
import { lisa_png } from './debug/panda_png'

export type Page = 'home' | 'loadImage' | 'editor' | 'download'
export type EditorOptions = RemoveProperties<PNG2SVGOptions, 'input'>
export type EditorTracer = 'imagetracer' | 'potrace'

export interface State {
  error?: Error | undefined;
  input: Image
  output: Image
  page: Page
  editorTracer: EditorTracer
  options: EditorOptions
  optimizing: boolean
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
    optimizing: false,
    options: {
      tracer: 'imagetracer',
      steps: 4, 
      background: '#ffffff', 
      color: '#000000', 
      turdSize: 3,
      ltres: 1,
      qtres: 1,
      pathomit: 8,
      rightangleenhance: false,
      numberofcolors: 16,
      mincolorratio: 0,
      scale: 1
    },
  }
}

export interface Image {
  size: number
  name: string
  content: Buffer
}