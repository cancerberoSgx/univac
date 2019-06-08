export interface Options {
  /**
   * .dot code to render. For Command line, it can also be path to .dot files or glob pattern to many .dot files, relative to current dir.
   */
  input: string;

  /**
   * Output image width. 
   */
  width?: number;

  /**
   * Output image height. 
   */
  height?: number;

  /**
   * Output format. By default 'svg'
   */
  format?: 'svg' | 'png-image-element' | 'json' | 'xdot' | 'plain' | 'ps';

  /**
   * Graph render engine. By default 'dot.
   */
  engine?: 'dot' | 'circo' | 'fdp' | 'neato' | 'asage' | 'twopi';

  /**
   * Format of output image.
   */
  mimeType?: 'image/jpeg' | 'image/png';

  /** 
   * Quality of output image.
   */
  quality?: number;

  // scale?: boolean;

  // nop?: number;
}
