import { PropertyOptional } from 'misc-utils-of-mine-generic';
import { Rule } from "./types";

export function buildRule(n: PropertyOptional<Rule, 'id'>, parent?: Rule, output: string[] = [], symbolRef?: (name: string)=>string): Rule[] {
  setId(n);
  if (n.type === 'SEQ') {
    output.push(`${n.id} [label="${n.id}\\n&rarr; SEQ", shape=record, fixedsize=false, peripheries=1];`);
    let lastChild: Rule = n as Rule;
    (n.members || []).forEach((c, i, a) => {
      lastChild = c;
      setId(c);
      buildRule(c, n as Rule, output, symbolRef);
      if (i === 0) {
        output.push(`${n.id} -> ${c.id} [];`);
      }
      else {
        const previous = a[i - 1];
        setId(previous);
        const endPoints = [...buildRule(previous, n as Rule, output, symbolRef)];  
        endPoints.forEach(cc => {
          output.push(`${cc.id} -> ${c.id} [];`);
        });
      }
    });
    return [lastChild];
  }
  else if (n.type === 'CHOICE') {
    output.push(`${n.id} [label="{${n.id}\\n&rarr; CHOICE|{${(n.members || []).map((m, i) => `<p${i}>`).join('|')}}}", shape=record, fixedsize=false, peripheries=1];`);
    const endPoints: Rule[] = [];
    (n.members || []).forEach((c, i, a) => {
      setId(c);
      endPoints.push(...buildRule(c, n as Rule, output, symbolRef));
      output.push(`${n.id}:p${i} -> ${c.id} [label="${getEdgeLabel(n as Rule, c)}"];`);
    });
    return endPoints;
  }
  else if (n.type === 'REPEAT' || n.type === 'REPEAT1') {
    output.push(`${n.id} [label="${n.id}\\n&rarr; ${n.type}", shape=record, fixedsize=false, peripheries=1];`);
    const endPoints = buildRule(n.content!, n as Rule, output, symbolRef)
    output.push(`${n.id} -> ${n.content!.id} [];`)
    endPoints.forEach(c=>{
      output.push(`${c.id} -> ${n.id} [];`)
    })
    return endPoints
  }
  else if (n.type === 'TOKEN' ||n.type==='PREC' ||n.type==='ALIAS') {
    output.push(`${n.id} [label="${n.id}\\n&rarr; ${n.type}", shape=record, fixedsize=false, peripheries=1];`);
    const endPoints = buildRule(n.content!, n as Rule, output, symbolRef)
    output.push(`${n.id} -> ${n.content!.id} [];`)
    // })
    return endPoints
  }
  else if (n.type === 'STRING' || n.type=== 'PATTERN') {
    output.push(`${n.id} [label="${n.id} ${n.type}\\n\\"${n.value}\\""];`);
  }
  else if (n.type === 'SYMBOL') {
    output.push(`${n.id} [label="${n.id} ${n.type}\\n${n.name}" href="${symbolRef ?  symbolRef(n.name||'_unnamed') : ''}"];`);
  }
  else if (n.type === 'BLANK') {
    output.push(`${n.id} [label="${n.id} \\n${n.type}"];`);
  }
 
  // "type_parameters": {
  //     "type": "PREC",
  //     "value": 1,
  //     content": {

  // {
  //   "type": "ALIAS",
  //   "content": {
  //     "type": "CHOICE",
  //     "members": [
  //       ...
  //     ]
  //   },
  //   "named": true,
  //   "value": "primitive_type"
  // },
  else {
    output.push(`${n.id} [label="${n.id} ${n.type}\\n(not-implemented)"];`);
  }
  // return []
  return [n as Rule];
  // return output
}

let counter = 1;

function setId(n: PropertyOptional<Rule, "id">) {
  n.id = n.id || ('s' + ((counter++) + '')); //.padStart(3, '0')
}

function getEdgeLabel(n: Rule, c: Rule) {
  return c.value || c.name || '';
}

export function _resetBuildRuleId() {
  counter = 1
}