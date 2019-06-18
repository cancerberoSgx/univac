export interface SVG2PNGOptions<E extends Encoding = 'raw'> extends BaseOptions, IDataURLOptions {
  /**
   * SVG code to render as plain text.
   * 
   * For CLi or Node.js, it can also be path or glob file pattern to .svg files, relative to current dir.
   */
  input: string | Buffer

  /**
   * Output format. One of: `png, jpeg`. By default: `png`.
   */
  format?: OutputFormat;

  /**
   * Output image encoding. One of: `base64, dataURL, raw, buffer`. By default: `raw`.
   */
  encoding?: E

}

export interface PNG2SVGOptions extends BaseOptions, RemoveProperties<PotracePosterizeOptions, 'optCurve'>, ImageTraceOptions {

  /**
   * The tracer engine to use. Notice that each engine has its own options which starts with engine name prefix. 
   * 
   *  * `potrace` engine gives good output drawing quality output but only in two colors or if more it needs to be manually configured and and won't respect original image's colors. 
   *  * `ìmagetracer` engine will respect original image colors although the output drawing might not be as good as ´potrace`
   */
  tracer?: 'potrace' | 'imagetracer'

  /**
   * Disable curve optimization (default false).
   */
  noCurveOptimization?: boolean
  /**
    * PNG/JPEG file content encoded as dataURL. 
    * 
    * For CLi and Node.js, it can also be a path or glob file pattern to .png / .jpg files, relative to current dir.
    */
  input: Buffer | string | Uint8Array | Blob;

}

export interface BaseOptions {
  /**
   * Node.js and CLI only. Folder for output files. If it doesn't exists it will be created. If none, output will be written to
   * stdout.
   */
  output?: string

  /**
    * CLI only. Print usage information, then exit.
    */
  help?: boolean

  /**
   * Node.js and CLI only. Prints debug messages. 
   */
  debug?: boolean
}


/**
 * - When number of `steps` is greater than 10 - an extra layer could be added to ensure presence of
 *   darkest/brightest colors if needed to ensure presence of probably-important-at-this-point details like
 *   shadows or line art.
 *
 * - With big number of layers produced image will be looking brighter overall than original due to math error
 *   at the rendering phase because of how layers are composited.
 *
 * - With default configuration `steps`, `threshold` and `rangeDistribution` settings all set to auto,
 *   resulting in a 4 thresholds/color stops being calculated with Multilevel Thresholding algorithm mentioned
 *   above. Calculation of 4 thresholds takes 3-5 seconds on average laptop. You may want to explicitly limit
 *   number of `steps` to 3 to moderately improve processing speed.  
 *
 */
export interface PotracePosterizeOptions extends PotraceTraceOptions {
  /**
   *  Number of samples that needs to be taken (and number of layers in SVG). (default: Posterizer.STEPS_AUTO,
   *  which most likely will result in 3, sometimes 4). Threshold computation for more than 5 levels may take
   *  a long time. 
   *
   *  Specifies desired number of layers in resulting image. If a number provided - thresholds for each layer
   *  will be automatically calculated according to `rangeDistribution` parameter. 
   *
   *  If an array provided it expected to be an array with pre computed thresholds for each layer (in range
   *  0..255)  
   *
   *  (default: `STEPS_AUTO` which will result in `3` or `4`, depending on `threshold` value)
   *
   */
  steps?: number | number[];

  /**
   *  determines how fill color for each layer should be selected. Possible values are exported as constants:
   *
   *  - `FILL_DOMINANT` (`dominant`) - most frequent color in range (used by default), 
   *
   *  - `FILL_MEAN` (`mean`) - arithmetic mean (average), 
   *
   *  - `FILL_MEDIAN` (`median`) - median color, 
   *
   *  - `FILL_SPREAD` (`spread`) - ignores color information of the image and just spreads colors equally in range
   *    0..threshold (or threshold..255 if `blackOnWhite` is set to `false`),
   * 
   *  - `none` 
   *
   *  (default: PotraceFillPolicy.FILL_DOMINANT).
   */
  fillStrategy?: PotraceFillPolicy;

  /**
   * How to choose thresholds in-between - after equal intervals or automatically balanced. (default:
   * PotraceRangeDistributionPolicy.RANGES_AUTO). Ignored if `steps` is an array. Possible values are:
   *
   *  - `RANGES_AUTO` (`auto`) - Performs automatic thresholding (using [Algorithm For Multilevel
   *    Thresholding][multilevel-thresholding]). Preferable method for already posterized sources, but takes
   *    long time to calculate 5 or more thresholds (exponential time complexity)  
   *    *(used by default)*
   *
   *  - `RANGES_EQUAL`  (`equal`)  - Ignores color information of the image and breaks available color space into equal
   *    chunks
   */
  rangeDistribution?: PotraceRangeDistributionPolicy;

  /**
   *  - Breaks image into foreground and background (and only foreground being broken into desired number of
   *    layers). Basically when provided it becomes a threshold for last (least opaque) layer and then `steps
   *    - 1` intermediate thresholds calculated. If **steps** is an array of thresholds and every value from
   *    the array is lower (or larger if **blackOnWhite** parameter set to `false`) than threshold - threshold
   *    will be added to the array, otherwise just ignored.  Default: `PotraceTurnPolicy.THRESHOLD_AUTO`
   */
  threshold?: number
}

export interface PotraceTraceOptions {
  /**
   * how to resolve ambiguities in path decomposition. Possible values are exported as constants:
   * `TURNPOLICY_BLACK`, `TURNPOLICY_WHITE`, `TURNPOLICY_LEFT`, `TURNPOLICY_RIGHT`, `TURNPOLICY_MINORITY`,
   * `TURNPOLICY_MAJORITY`. (`black`, `white`, `left`, `right`, `minority`, `majority`)
   * 
   * Refer to [this document](http://potrace.sourceforge.net/potrace.pdf) for more
   * information (page 4)  .  (default PotraceTurnPolicy.TURNPOLICY_MINORITY). 
   */
  turnPolicy?: PotraceTurnPolicy;

  /**
   * suppress speckles of up to this size (default 2).
   */
  turdSize?: number;

  /**
   * corner threshold parameter (default 1).
   */
  alphaMax?: number;

  /**
   * curve optimization (default true).
   */
  optCurve?: boolean;

  /**
   * curve optimization tolerance (default 0.2).
   */
  optTolerance?: number;

  /**
   * threshold below which color is considered black (0..255, default Potrace.THRESHOLD_AUTO). Should be a
   * number in range 0..255 or `PotraceTurnPolicy.THRESHOLD_AUTO` in which case threshold will be selected
   * automatically using [Algorithm For Multilevel
   * Thresholding][http://www.iis.sinica.edu.tw/page/jise/2001/200109_01.pdf]  
   *
   */
  threshold?: number;

  /**
   * specifies colors by which side from threshold should be traced (default true).
   */
  blackOnWhite?: boolean;

  /**
   *  Fill color. Will be ignored when exporting as \<symbol\>. (default: `PotraceTurnPolicy.COLOR_AUTO`,
   *  which means black or white, depending on `blackOnWhite` property)
   */
  color?: string;

  /**
   * Background color. Will be ignored when exporting as \<symbol\>. By default is not present
   * (`PotraceTurnPolicy.COLOR_TRANSPARENT`)
   */
  background?: string;

}

export enum Potrace {
  COLOR_AUTO = 'auto',
  COLOR_TRANSPARENT = 'transparent',
  THRESHOLD_AUTO = -1
}

export enum Posterizer {
  STEPS_AUTO = -1
}

export enum PotraceRangeDistributionPolicy {
  RANGES_AUTO = 'auto',
  RANGES_EQUAL = 'equal'
}

export enum PotraceFillPolicy {
  FILL_SPREAD = 'spread',
  FILL_DOMINANT = 'dominant',
  FILL_MEDIAN = 'median',
  FILL_MEAN = 'mean',
  FILL_NONE = 'none'
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

export type Format = 'svg' | OutputFormat

export type OutputFormat = 'png' | 'jpeg'
// export enum Format  {'png'='png' , 'jpeg'='jpeg', 'svg'='svg'}

// export enum OutputFormat  {'png'='png' , 'jpeg'='jpeg'} 

// export enum Encoding { 'base64'='base64', 'dataURL'='dataURL', 'raw'='raw', 'buffer'='buffer'}
export type Encoding = 'base64' | 'dataURL' | 'raw' | 'buffer'




import { IDataURLOptions } from 'fabric/fabric-impl'
import { RemoveProperties } from 'misc-utils-of-mine-generic'
export { IDataURLOptions }
// declare type Buffer=any
// declare type Blob=any
// declare type Uint8Array = any
// declare type RemoveProperties<T,V> = any

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




// TODO: types to that project and remove this:
export interface ImageTraceOptions {
  // /**
  //   * Path or glob file pattern to .png files, relative to current dir.
  //   */
  // input: string 

  // /**
  //  * Folder for output files. If it doesn't exists it will be created. If none, output files will be written
  //  * in current folder.
  //  */
  // output?: string

  // /**
  //  *  Print usage information, then exit.
  //  */
  // help?: boolean

  // /**
  //  *  Prints debug messages. 
  //  */
  // debug?: boolean

  // /**
  //  * output file format. Currently only svg is supported
  //  */
  // format?: 'svg'

  /**
   * Error threshold for straight lines. Default value: 1. 
   */
  ltres?: number

  /**
   * Error threshold for quadratic splines. Default value: 1.
   */
  imagetracerjs_qtres?: number

  /**
   * 	Edge node paths shorter than this will be discarded for noise reduction. Default value: 8.
   */
  imagetracerjs_pathomit?: number

  /**
   * Enhance right angle corners. Default value: 1.
   */
  imagetracerjs_rightangleenhance?: boolean

  /**
   * 0: disabled, generating a palette; 1: random sampling; 2: deterministic sampling. Default value: 2.
   */
  imagetracerjs_colorsampling?: 0 | 1 | 2 //TODO: enum

  /**
   * 	Number of colors to use on palette if pal object is not defined. Default value: 16.
   */
  imagetracerjs_numberofcolors?: number

  /**
   * 	Color quantization will randomize a color if fewer pixels than (total pixels*mincolorratio) has it.
   * 	Default value: 0.
   */
  imagetracerjs_mincolorratio?: number

  /**
   *  Color quantization will be repeated this many times. Default value: 3.
   */
  imagetracerjs_colorquantcycles?: number

  /**
   * 0: sequential ; 1: parallel
   */
  imagetracerjs_layering?: 0 | 1//TODO: enum

  /**
   *  SVG stroke-width. Default value: 1.
   */
  imagetracerjs_strokewidth?: number

  /**
   *  Enable or disable line filter for noise reduction. Default value: false.
   */
  imagetracerjs_linefilter?: boolean

  /**
   *  Every coordinate will be multiplied with this, to scale the SVG. Default value: 1.
   */
  imagetracerjs_scale?: number

  /**
   *  rounding coordinates to a given decimal place. 1 means rounded to 1 decimal place like 7.3 ; 3 means
   *  rounded to 3 places, like 7.356. Default value: 1.
   */
  imagetracerjs_roundcoords?: number

  /**
   *  Enable or disable SVG viewbox. Default value: false.
   */
  imagetracerjs_viewbox?: boolean

  /**
   *  Enable or disable SVG descriptions. Default value: false.
   */
  imagetracerjs_desc?: boolean

  /**
   *  	Set this to 1..5 for selective Gaussian blur preprocessing. Default value: 0.
   */
  imagetracerjs_blurradius?: number

  /**
   *  	RGBA delta treshold for selective Gaussian blur preprocessing. Default value: 20.
   */
  imagetracerjs_blurdelta?: number

  // layercontainerid No default value  Edge node layers can be visualized if a container div's id is defined.
  // lcpr 0 Straight line control point radius, if this is greater than zero, small circles will be drawn in
  // the SVG. Do not use this for big/complex images. qcpr 0 Quadratic spline control point radius, if this is
  // greater than zero, small circles and lines will be drawn in the SVG. Do not use this for big/complex
  // images. Initial palette Option name  Default value Meaning pal  No default value  Custom palette, an
  // array of color objects: [ {r:0,g:0,b:0,a:255}, ... ]



}
