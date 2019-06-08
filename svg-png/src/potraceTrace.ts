import { promisify } from 'util';
var potrace = require('potrace');
export const potraceTrace = promisify(potrace.trace as (url: string, o: PotraceTraceOptions, callback: (err: NodeJS.ErrnoException | null, svg: string) => void) => void);
export const potracePosterize = promisify(potrace.posterize as (url: string, o: PotracePosterizeOptions, callback: (err: NodeJS.ErrnoException | null, svg: string) => void) => void);
interface PotracePosterizeOptions extends PotraceTraceOptions {
  /**
   *  Number of samples that needs to be taken (and number of layers in SVG). (default: Posterizer.STEPS_AUTO, which most likely will result in 3, sometimes 4). Threshold computation for more than 5 levels may take a long time
   */
  steps?: number;
  /**
   *  How to select fill color for color ranges - equally spread or dominant. (default: PotraceFillPolicy.FILL_DOMINANT).
   */
  fill?: PotraceFillPolicy;
  /**
   * How to choose thresholds in-between - after equal intervals or automatically balanced. (default: PotraceRangeDistributionPolicy.RANGES_AUTO).
   */
  rangeDistribution?: PotraceRangeDistributionPolicy;
}
interface PotraceTraceOptions {
  /**
   * how to resolve ambiguities in path decomposition (default PotraceTurnPolicy.TURNPOLICY_MINORITY).
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
   * threshold below which color is considered black (0..255, default Potrace.THRESHOLD_AUTO).
   */
  threshold?: number;
  /**
   * specifies colors by which side from threshold should be traced (default true).
   */
  blackOnWhite?: boolean;
  /**
   * foreground color (default: 'auto' (black or white)) Will be ignored when exporting as <symbol>.
   */
  color?: string;
  /**
   * background color (default: 'transparent') Will be ignored when exporting as <symbol>.
   */
  background?: string;
}
enum Potrace {
  COLOR_AUTO = 'auto',
  COLOR_TRANSPARENT = 'transparent',
  THRESHOLD_AUTO = -1
}
enum Posterizer {
  STEPS_AUTO = -1
}
enum PotraceRangeDistributionPolicy {
  RANGES_AUTO = 'auto',
  RANGES_EQUAL = 'equal'
}
enum PotraceFillPolicy {
  FILL_SPREAD = 'spread',
  FILL_DOMINANT = 'dominant',
  FILL_MEDIAN = 'median',
  FILL_MEAN = 'mean'
}
enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}
