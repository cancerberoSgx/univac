import { RemoveProperties, getFileNameFromUrl } from 'misc-utils-of-mine-generic'
import { PNG2SVGOptions, SVG2PNGOptions } from 'svg-png-converter'
import { PNG2SVGOptionsSchema } from '../options/PNG2SVGOptions.schema'
import { SVG2PNGOptionsSchema } from '../options/SVG2PNGOptionsSchema'
import { Down_the_Rabbit_Hole_png } from './files/Down_the_Rabbit_Hole_png'
import { graph1_svg } from './files/graph1_svg'
import { hierarchy1_svg } from './files/hierarchy1_svg'
import { hierarchy2_png } from './files/hierarchy2_png'
import { hierarchy2_svg } from './files/hierarchy2_svg'
import { hindenburg_jpg } from './files/hindenburg_jpg'
import { oldpic_jpg } from './files/oldpic'
import { panda_png } from './files/panda_png'
import { photo1_jpg } from './files/photo1_jpg'
import { shade_blur_and_gradients43 } from './files/shade_blur_and_gradients43'
import { something_png } from './files/something_jpg'
import { tiger_svg } from './files/tiger_svg'
import { yao_jpg } from './files/yao_jpg'

export interface Example {
  code: string;
  name: string
  description: string;
  outputName: string
  inputSize?: number
  outputSize?: number
  svg2png?: RemoveProperties<SVG2PNGOptions, 'input'>
  png2svg?: RemoveProperties<PNG2SVGOptions, 'input'>
}

export const examples: Example[] = ([

  {
    name: 'graph1.svg',
    outputName: 'graph1.png',
    svg2png: {
      format: 'png'
    },
    code: graph1_svg.trim(),
    description: ' ',
  },

  {
    name: 'oldpic.jpg',
    outputName: 'oldpic.svg',
    code: oldpic_jpg.trim(),
    description: ' ',
  },

  {
    name: 'hindenburg.jpg',
    outputName: 'hindenburg.svg',
    code: hindenburg_jpg.trim(),
    description: ' ',
  },

  {
    name: 'something.jpg',
    outputName: 'something.svg',
    code: something_png.trim(),
    description: ' ',
  },

  {
    name: 'yao.jpg',
    outputName: 'yao.svg',
    code: yao_jpg.trim(),
    description: ' ',
  },

  {
    name: 'panda.png',
    outputName: 'panda.svg',
    code: panda_png.trim(),
    description: ' ',
  },
  {
    name: 'shade_blur_and_gradients43.svg',
    outputName: 'shade_blur_and_gradients43.jpg',
    svg2png: {
      format: 'jpeg'
    },
    code: shade_blur_and_gradients43.trim(),
    description: ' ',
  },

  {
    name: 'hierarchy1.svg',
    outputName: 'hierarchy1.jpg',
    svg2png: {
      format: 'jpeg'
    },
    code: hierarchy1_svg.trim(),
    description: ' ',
  },

  {
    name: 'hierarchy2.svg',
    outputName: 'hierarchy1.png',
    svg2png: {
      format: 'png'
    },
    code: hierarchy2_svg.trim(),
    description: ' ',
  },

  {
    name: 'hierarchy2.png',
    outputName: 'hierarchy2.svg',
    code: hierarchy2_png.trim(),
    description: ' ',
  },

  {
    name: 'tiger.svg',
    outputName: 'tiger.jpg',
    svg2png: {
      format: 'jpeg'
    },
    code: tiger_svg.trim(),
    description: ' ',
  },

  {
    name: 'Down_the_Rabbit_Hole.png',
    outputName: 'Down_the_Rabbit_Hole.svg',
    code: Down_the_Rabbit_Hole_png.trim(),
    description: ' ',
  },

  {
    name: 'photo1.jpg',
    outputName: 'photo1.svg',
    code: photo1_jpg.trim(),
    description: ' ',
  },

] as Example[]).map(f => f.svg2png ? { ...f, ...{ svg2png: { ...SVG2PNGOptionsSchema, ...f.svg2png } } } : { ...f, png2svg: { ...PNG2SVGOptionsSchema, ...f.png2svg }, name: getFileNameFromUrl(f.code) } as any)
