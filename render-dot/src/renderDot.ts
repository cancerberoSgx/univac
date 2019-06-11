import { getLibrary } from './library'
import { Options } from './types'

export async function renderDot(options: Options) {
  if(options.format!=='png'){
    return await getLibrary().renderString(options.input, options)
  }else {
    const svg =  await getLibrary().renderString(options.input, {...options, format: 'svg'})    
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