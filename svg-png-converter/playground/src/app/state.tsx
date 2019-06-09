import { Example, examples } from "./examples"
import { RemoveProperties } from 'misc-utils-of-mine-generic';
import { SVG2PNGOptions, PNG2SVGOptions, png2svg } from '../../../dist/src';
import { convert } from './dispatchers';

export interface State {
  example: Example
  error?: Error |  undefined;
  examples: Example[];
  svg2png: RemoveProperties<SVG2PNGOptions, 'input'>
  png2svg: RemoveProperties<PNG2SVGOptions, 'input'>
  output: string
  // input: string
}

export async function getInitialState(): Promise<State> {
  return {
    example:  examples[0],
    error: undefined,
    examples,
    svg2png: {},
    png2svg: {},
    output: await convert(examples[0]),
    input:  examples[0].code
  }
}
