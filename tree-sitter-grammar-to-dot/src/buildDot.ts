import { PropertyOptional } from 'misc-utils-of-mine-generic';
import { GrammarNode, Options } from "./types";


export function buildDot(options: Options) {
  const result: string[] = [];
  buildDotLines(options.input, undefined, result);
  const input = `
digraph ATN {

  rankdir=LR;

  ${result.join('\n  ')}

}
  `;
  return input;
}

function buildDotLines(n: PropertyOptional<GrammarNode, 'id'>, parent?: GrammarNode, output: string[] = []) {
  setId(n);
  if (n.type === 'SEQ') {
    // TODO: skip SEQ node
    // if(parent){
    //   n.id = parent.id 
    //   n.type = parent.id
    // }

    output.push(`${n.id} [ label="${n.id}\\n&rarr; SEQ"];`);
    let lastChild: GrammarNode = n as GrammarNode;
    (n.members || []).forEach((c, i, a) => {
      lastChild = c;
      setId(c);
      buildDotLines({ ...c, members: [] }, n as any, output);
      if (i === 0) {
        output.push(`${n.id} -> ${c.id} [];`);
      }
      else {
        // buildGraph(c, n as any,  output)
        const previous = a[i - 1];
        setId(previous);
        const endPoints = [...buildDotLines(previous, n as any, output)]; //, ...i===a.length-1 ? [] : [previous]].filter(notSame)
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
      endPoints.push(...buildDotLines(c, n as any, output));
      output.push(`${n.id}:p${i} -> ${c.id} [label="${getEdgeLabel(n as GrammarNode, c)}"];`);
    });
    return endPoints;
  }
  else if (n.value) {
    output.push(`${n.id} [label="${n.id} ${n.type}\\n${n.value}"];`);
    // return [n as GrammarNode]
  }
  else if (n.type === 'SYMBOL') {
    output.push(`${n.id} [label="${n.id} ${n.type}\\n${n.name}"];`);
    // return [n as GrammarNode]
  }
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
