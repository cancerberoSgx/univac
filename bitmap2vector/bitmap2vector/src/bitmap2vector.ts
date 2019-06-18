import Jimp from 'jimp'
import { imagedataToSVG } from '.'
import { BufferClass } from './buffer'
import { Bitmap2VectorOptions } from './types'

export async function bitmap2vector(options: Bitmap2VectorOptions) {
  const image = await resolveInput(options)
  const content = imagedataToSVG(image.bitmap, options)
  return {
  content,
    width: image.bitmap.width,
    height: image.bitmap.height
  }
}

async function resolveInput(options: Bitmap2VectorOptions) {
  let buffer: Buffer
  if (BufferClass.isBuffer(options.input)) {
    buffer = options.input
    return await Jimp.read(buffer)
  }
  else if (options.input instanceof Uint8Array) {
    buffer = BufferClass.from(options.input)
    return await Jimp.read(buffer)
  }
  else if (typeof options.input === 'string') {
    return await Jimp.read(options.input)
  }
  else throw new Error('Unrecognized kind of input ' + options.input)
}

