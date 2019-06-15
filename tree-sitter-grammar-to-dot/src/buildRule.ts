import { PropertyOptional } from 'misc-utils-of-mine-generic';
import { GrammarNode } from "./types";
export function buildRule(n: PropertyOptional<GrammarNode, 'id'>, parent?: GrammarNode, output: string[] = []) {
  setId(n);
  if (n.type === 'SEQ') {
    // TODO: skip SEQ node
    // if(parent){
    //   n.id = parent.id 
    //   n.type = parent.id
    // }
    output.push(`${n.id} [label="${n.id}\\n&rarr; SEQ", shape=record, fixedsize=false, peripheries=1];`);
    let lastChild: GrammarNode = n as GrammarNode;
    (n.members || []).forEach((c, i, a) => {
      lastChild = c;
      setId(c);
      buildRule(c, n as GrammarNode, output);
      // buildRule({ ...c, members: [] }, n as GrammarNode, output);
      if (i === 0) {
        output.push(`${n.id} -> ${c.id} [];`);
      }
      else {
        // buildGraph(c, n as GrammarNode,  output)
        const previous = a[i - 1];
        setId(previous);
        const endPoints = [...buildRule(previous, n as GrammarNode, output)]; //, ...i===a.length-1 ? [] : [previous]].filter(notSame)
        endPoints.forEach(cc => {
          output.push(`${cc.id} -> ${c.id} [];`);
        });
      }
    });
    return [lastChild];
  }
  else if (n.type === 'CHOICE') {
    output.push(`${n.id} [label="{${n.id}\\n&rarr; CHOICE|{${(n.members || []).map((m, i) => `<p${i}>`).join('|')}}}", shape=record, fixedsize=false, peripheries=1];`);
    const endPoints: GrammarNode[] = [];
    (n.members || []).forEach((c, i, a) => {
      setId(c);
      endPoints.push(...buildRule(c, n as GrammarNode, output));
      output.push(`${n.id}:p${i} -> ${c.id} [label="${getEdgeLabel(n as GrammarNode, c)}"];`);
    });
    return endPoints;
  }
  else if (n.type === 'REPEAT') {
    output.push(`${n.id} [label="${n.id}\\n&rarr; REPEAT", shape=record, fixedsize=false, peripheries=1];`);
    const endPoints = buildRule(n.content!, n as GrammarNode, output)
    output.push(`${n.id} -> ${n.content!.id} [];`)
    endPoints.forEach(c=>{
      output.push(`${c.id} -> ${n.id} [];`)
    })
  }
  else if (n.type === 'STRING' || n.type=== 'PATTERN') {
    output.push(`${n.id} [label="${n.id} ${n.type}\\n${n.value}"];`);
  }
  else if (n.type === 'SYMBOL') {
    output.push(`${n.id} [label="${n.id} ${n.type}\\n${n.name}"];`);
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
  return [n as GrammarNode];
  // return output
}
let counter = 1;
function setId(n: PropertyOptional<GrammarNode, "id">) {
  n.id = n.id || ('s' + ((counter++) + '')); //.padStart(3, '0')
}
function getEdgeLabel(n: GrammarNode, c: GrammarNode) {
  return c.value || c.name || '';
}
