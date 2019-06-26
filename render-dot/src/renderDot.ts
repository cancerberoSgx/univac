import { svg2png } from 'svg-png-converter'
import { getLibrary, terminateLibrary } from './library'
import { Options } from './types'

export async function renderDot(options: Options) {
  try {
    options.debug && console.log('renderDot options', options)
    if (!options.format || !['jpeg', 'png', 'gif'].includes(options.format)) {
      return await getLibrary().renderString(options.input, options)
    }
    else {
      const input = await getLibrary().renderString(options.input,
        {
          ...options, format: 'svg'
        })
      let s = await svg2png({
        ...options,
        input,
        // encoding: 'dataURL',           //TODO: add to options
        format: (options.format || 'png') as any,
        // width: options.width || undefined,
        // height: options.height || undefined,
        // multiplier: options.debug,     //TODO: add to options
        // quality: options.quality || undefined//.5                    //TODO: add to options
      })
      return s
    }
  } catch (error) {
    // console.error('renderDot() error ', error)
    terminateLibrary()
    throw error
  }
}



//  we could include this options for svg output: 

// interface IToSVGOptions {
// 	/**
// 	 * If true xml tag is not included
// 	 */
// 	suppressPreamble: boolean;
// 	/**
// 	 * SVG viewbox object
// 	 */
// 	viewBox: {
//     /**
//      * x-cooridnate of viewbox
//      */
//     x: number;
//     /**
//      * y-coordinate of viewbox
//      */
//     y: number;
//     /**
//      * Width of viewbox
//      */
//     width: number;
//     /**
//      * Height of viewbox
//      */
//     height: number;
//   };
// 	/**
// 	 * Encoding of SVG output
// 	 */
// 	encoding: string;
// 	/**
// 	 * desired width of svg with or without units
// 	 */
// 	width: number;
// 	/**
// 	 * desired height of svg with or without units
// 	 */
// 	height: number;
// }



// same for jpeg, png : 


// interface IDataURLOptions {
// 	/**
// 	 * The format of the output image. Either "jpeg" or "png"
// 	 */
// 	format?: string;
// 	/**
// 	 * Quality level (0..1). Only used for jpeg
// 	 */
// 	quality?: number;
// 	/**
// 	 * Multiplier to scale by
// 	 */
// 	multiplier?: number;
// 	/**
// 	 * Cropping left offset. Introduced in v1.2.14
// 	 */
// 	left?: number;
// 	/**
// 	 * Cropping top offset. Introduced in v1.2.14
// 	 */
// 	top?: number;
// 	/**
// 	 * Cropping width. Introduced in v1.2.14
// 	 */
// 	width?: number;
// 	/**
// 	 * Cropping height. Introduced in v1.2.14
// 	 */
// 	height?: number;
// 	enableRetinaScaling?: boolean;
// 	withoutTransform?: boolean;
// 	withoutShadow?: boolean;
// }
