import {SVG2PNGOptions, PNG2SVGOptions} from 'svg-png-converter'
import {RemoveProperties} from 'misc-utils-of-mine-generic'
import { something_png } from './files/something_jpg';
import { graph1_svg } from './files/graph1_svg';
import { yao_jpg } from './files/yao_jpg';
import { panda_png } from './files/panda_png';
import { shade_blur_and_gradients43 } from './files/shade_blur_and_gradients43';
import { hierarchy1_svg } from './files/hierarchy1_svg';
import { hierarchy2_svg } from './files/hierarchy2_svg';
import { hierarchy2_png } from './files/hierarchy2_png';

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

export const examples: Example[] = [

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
    name: 'something.jpg',
    outputName: 'something.svg',
    png2svg: {
    },

    code: something_png.trim(),
    description: ' ',
  },
  
  {
    name: 'yao.jpg',
    outputName: 'yao.svg',
    png2svg: {
    },
    code: yao_jpg.trim(),
    description: ' ',
  },
   
  {
    name: 'panda.png',
    outputName: 'panda.svg',
    png2svg: {
    },
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
    png2svg: {
    },
    code: hierarchy2_png.trim
    (),
    description: ' ',
  },

]
