import { ShapeTypes } from 'geometrizer-js'
import { urlToBase64 } from './base64'
import { BufferClass } from './buffer'
import { panda_png } from './debug/panda_png'

export interface State {
  input: Image
  output: Image
  iterations: number
  alpha: number
  candidateShapesPerStep: number
  shapeMutationsPerStep: number
  shapeTypes: ShapeTypes[]
  stepTimeout: number
  svgContainer?: HTMLElement
  working: boolean
  stepInterval: number
}

export interface Image {
  size: number
  name: string
  content: Buffer
}

export async function getInitialState(): Promise<State> {
  return {
    working: false,
    stepInterval: 100,
    input: {
      size: panda_png.length,
      content: BufferClass.from(urlToBase64(panda_png), 'base64'),
      name: 'panda.png'
    },
    output: {
      size: 0,
      content: BufferClass.from(''),
      name: 'unnamed.png.svg',
    },
    iterations: 50,
    alpha: 128,
    candidateShapesPerStep: 50,
    shapeMutationsPerStep: 100,
    shapeTypes: [ShapeTypes.CIRCLE],
    stepTimeout: 100
  }
}
