
import { ITOptions } from './types'
export { bitmap2vector } from './bitmap2vector'
export { Bitmap2VectorOptionsOptions } from './types'


const IT = require('imagetracerjs')

export const imagedataToSVG: (data: { width: number, height: number, data: Buffer }, options: ITOptions) => string = IT.imagedataToSVG

