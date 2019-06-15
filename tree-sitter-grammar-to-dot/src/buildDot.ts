import { Options } from "./types";
import { buildRule } from './buildRule';
import { notSame } from 'misc-utils-of-mine-generic';

export function buildDot(options: Options) {
  const result: string[] = [];
  buildRule(options.input, undefined, result);
  const input = `
digraph ATN {

  rankdir=LR;

  ${result.filter(notSame).join('\n  ')}

}
  `;
  return input;
}


