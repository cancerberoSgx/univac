import { Options, Rule } from "./types";
import { buildRule } from './buildRule';
import { notSame, objectKeys } from 'misc-utils-of-mine-generic';

export function buildDot(options: Options) {
  // const rule: Rule = {
    //   type: 'SEQ', 
    //   members: [
      //     {
  //       type: 'SYMBOL',
  //       name: 'START'
  //     },
  //     ...objectKeys(options.input.rules).map(name=>options.input.rules[name]), 
  //     {
  //       type: 'SYMBOL',
  //       name: 'END'
  //     }
  //   ]
  // }
  const rules  = objectKeys(options.input.rules).map(name=>{
    const rule = options.input.rules[name]
    const result: string[] = [];
    buildRule(rule, undefined, result);
    const dot = `
  digraph ${name} {
  
    rankdir=LR;
  
    ${result.filter(notSame).join('\n  ')}
  
  }
  `;
  return {name, dot};
})

return {rules}
}


