import { Options, Rule } from "./types";
import { buildRule } from './buildRule';
import { notSame, objectKeys } from 'misc-utils-of-mine-generic';

export function buildGrammarDot(options: Options) {
  const rules = objectKeys(options.input.rules).map(name => {
    const rule = options.input.rules[name]
    const dot = buildRuleDot(rule, options.name, (name: string) => `${name || 'javascript'}-grammar.json.${name}.dot.svg`);
    return { name, dot };
  })
  return { rules }
}


export function buildRuleDot(rule: Rule, name?: string, symbolRef?: (name: string) => string) {
  const result: string[] = [];
  buildRule(rule, undefined, result, symbolRef);
  const dot = `
digraph ${name||'rule'} {

  rankdir=LR;

  ${result.filter(notSame).join('\n  ')}

}
  `;
  return dot;
}

