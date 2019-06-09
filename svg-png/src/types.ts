import { PotracePosterizeOptions } from './potrace';

export interface SVG2PNGOptions extends BaseOptions {
  /**
   * SVG code to render as plain text.
   * 
   * For CLi or Node.js, it can also be path or glob file pattern to .svg files, relative to current dir.
   */
  input: string;

  /**
   * Output format. One of: `png, jpeg`. By default: `png`.
   */
  format?: OutputFormat;

  /**
   * Output image encoding. One of: `base64, dataURL, raw`. By default: `raw`.
   */
  encoding?: Encoding

  // /** 
  //  * Quality of output image.
  //  */
  // quality?: number;

  // /**
  //  * Output image width. 
  //  */
  // width?: number;

  // /**
  //  * Output image height. 
  //  */
  // height?: number;
}
export interface PNG2SVGOptions extends BaseOptions, PotracePosterizeOptions {
 /**
   * PNG/JPEG file content encoded as dataURL. 
   * 
   * For CLi and Node.js, it can also be a path or glob file pattern to .png / .jpg files, relative to current dir.
   */
  input: Buffer|string|Uint8Array|Blob;

  // /** 
  //  * Necessary in case the input is a string If the input format is other than PNG then the format must be declared here. By default PNG is assumed. 
  //  * 
  //  * In Node.js / CLI, if many file paths are given as input, the format will be inferred from their extensions.  
  //  */
  // inputFormat?: string
}


interface BaseOptions {

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

export type Format = 'svg' | OutputFormat

export type OutputFormat = 'png' | 'jpeg'

type Encoding = 'base64' | 'dataURL' | 'raw'
