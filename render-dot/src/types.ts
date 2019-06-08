export interface Options extends VizOptions {
  code: string;
}
interface VizOptions {
  width?: number;
  height?: number;
  format?: 'svg' | 'png-image-element' | 'json' | 'xdot' | 'plain' | 'ps';
  engine?: 'dot' | 'circo' | 'fdp' | 'neato' | 'asage' | 'twopi';
  mimeType?: 'image/jpeg' | 'image/png';
  quality?: number;
  scale?: boolean;
  nop?: number;
}
