
import { ITOptions } from './types';
export { Bitmap2VectorOptionsOptions } from './types'

export { bitmap2vector } from './bitmap2vector'

const IT = require('imagetracerjs')

export const imagedataToSVG: (data: { width: number, height: number, data: Buffer }, options: ITOptions) => string = IT.imagedataToSVG

