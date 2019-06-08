export interface Options {
  /**
   * .dot code to render.
   */
  input: string;

  /**
   * Output image width. 
   */
  width?: number;

  /**
   * 
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
