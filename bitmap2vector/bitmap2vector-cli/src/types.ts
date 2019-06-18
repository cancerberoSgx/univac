import { Bitmap2VectorOptions } from 'bitmap2vector'

export interface CliOptions extends Bitmap2VectorOptions {

  /**
   * Folder for output files. If it doesn't exists it will be created. If none, output files will be written
   * in current folder.
   */
  output?: string

  /**
   *  Print usage information, then exit.
   */
  help?: boolean

  /**
   *  Prints debug messages. 
   */
  debug?: boolean
}
