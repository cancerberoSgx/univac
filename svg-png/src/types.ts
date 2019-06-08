export interface Options {
  /**
   * .svg code to render. For CLi or Node.js, it can also be path to .svg files or glob pattern to many .svg
   * files, relative to current dir.
   */
  input: string;

  /**
   * Output format. One of: `png, jpeg`. By default: `png`.
   */
  format?: OutputFormat;

  /**
   * Output image encoding. One of: `base64, dataURL, raw`. By default: `raw`.
   */
  encoding?:  Encoding

  /**
   * Node.js and CLI only. Folder for output files. If it doesn't exists it will be created. If none, output will be written to
   * stdout.
   */
  output?: string

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

  /**
   * CLI only. Print usage information, then exit.
   */
  help?: boolean

  /**
   * Node.js and CLI only. Prints debug messages. 
   */
  debug?: boolean
}


export type Format = 'svg'|OutputFormat
export type OutputFormat = 'png'|'jpeg'
type Encoding = 'base64'|'dataURL'|'raw'