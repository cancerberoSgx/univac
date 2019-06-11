import { enumKeys } from 'misc-utils-of-mine-typescript'

export interface Options {
  /**
   * .dot code to render. For Command line, it can also be path to .dot files or glob pattern to many .dot
   * files, relative to current dir.
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
   * Output format. One of: `svg, png, json, xdot, plain, ps`. By default: `svg`.
   */
  format?: 'svg' | 'png' | 'jpeg' | 'gif' | 'json' | 'xdot' | 'plain' | 'ps';

  /**
   * Graph layout implementation. One of : `dot, circo, fdp, neato, asage, twopi, patchwork, sfdp`. By default: `dot`.
   */
  layout?: Layout;

  /** 
   * Quality of output image.
   */
  quality?: number;

  /**
   * Set input scale to scale. If this value is omitted, 72.0 is used. This number is used to convert the
   * point coordinate units used in the pos attribute into inches, which is what is expected by neato and fdp.
   * Thus, feeding the output of a graph laid out by one program into neato or fdp almost always requires this
   * flag. Ignored if the -n flag is used.
   */
  scale?: boolean;

  /**
   * By default, the coordinate system used in generic output formats, such as attributed dot, extended dot,
   * plain and plain-ext, is the standard cartesian system with the origin in the lower left corner, and with
   * increasing y coordinates as points move from bottom to top. If the -y flag is used, the coordinate system
   * is inverted, so that increasing values of y correspond to movement from top to bottom.
   */
  yInvert?: boolean

  /**
   * Sets no-op flag in neato. If set, neato assumes nodes have already been positioned and all nodes have a
   * pos attribute giving the positions. It then performs an optional adjustment to remove node-node overlap,
   * depending on the value of the overlap attribute, computes the edge layouts, depending on the value of the
   * splines attribute, and emits the graph in the appropriate format. If num is supplied, the following
   * actions occur:
   *
   * num = 1 : Equivalent to -n.
   *
   * num > 1: Use node positions as specified, with no adjustment to remove node-node overlaps, and use any
   * edge layouts already specified by the pos attribute. neato computes an edge layout for any edge that does
   * not have a pos attribute. As usual, edge layout is guided by the splines attribute.
   */
  nop?: number;

  /**
   * Folder for output files. If it doesn't exists it will be created. If none, output will be written to
   * stdout.
   */
  output?: string

  /**
   * Print usage information, then exit.
   */
  help?: boolean

  /**
   * Prints debug messages. 
   */
  debug?: boolean
}

export enum Layout {
  'dot' = 'dot',
  'circo' = 'circo',
  'fdp' = 'fdp',
  'neato' = 'neato',
  'asage' = 'asage',
  'twopi' = 'twopi',
  'patchwork' = 'patchwork',
  'sfdp' = 'sfdp',
}

export const layouts = enumKeys(Layout)
