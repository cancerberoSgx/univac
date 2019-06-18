import { Bitmap2VectorOptionsOptions } from './types';
import { fetchAsBuffer } from './util';
import Jimp from 'jimp'
import { imagedataToSVG } from '.';
import { BufferClass } from './buffer';

export async function bitmap2vector(options: Bitmap2VectorOptionsOptions) {
  // const buffer = await resolveInput(options)
  const image =await resolveInput(options)
  const svg = imagedataToSVG( image.bitmap, options)
  return {
    svg,
     width: image.bitmap.width, 
    height: image.bitmap.height
  }
}

async function resolveInput(options: Bitmap2VectorOptionsOptions) {
  let buffer : Buffer
 if (BufferClass.isBuffer(options.input)){
    buffer= options.input 
    return await  Jimp.read(buffer)
  }
  else if (options.input instanceof Uint8Array){
    buffer = BufferClass.from(options.input)
    return await  Jimp.read(buffer)
  }
  else if (typeof options.input ==='string'){
    return await  Jimp.read(options.input)
  }
  else throw new Error('Unrecognized kind of input '+options.input )
}

