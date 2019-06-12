import { getNodeId } from '../node';
import { Node } from '../types';

export function toDot(node: Node) {
  const els: E[] = [];
  function f(node: Node) {
    const id = getNodeId(node);
    if (!els.find(e => e.id === id)) {
      els.push({ id, nodes: [node], text: `${id} [fontsize=11, label="${node.type}", width=.8];` });
    }
    node.children.forEach(c => {
      const cid = getNodeId(c);
      if (!els.find(c => c.id === cid)) {
        els.push({ id: cid, nodes: [c], text: `${cid} [fontsize=11, label="${c.type}", width=.8];` });
      }
      els.push({ id: `${id} -> ${cid}`, nodes: [node, c], text: `${id} -> ${cid} [fontsize=11, arrowsize=.9, arrowhead=normal];` });
      f(c);
    });
  }
  f(node); 
  // digraph ATN {
  //   rankdir=LR;
  //   s149[fontsize=11, label="149", shape=doublecircle, fixedsize=true, width=.6];
  //   s1155[fontsize=11,label="1155", shape=circle, fixedsize=true, width=.55, peripheries=1];
  //   s148 -> s1157 [fontname="Times-Italic", label="&epsilon;"];
  //   s1156 -> s1158 [fontsize=11, fontname="Courier", arrowsize=.7, label = "<declaration>", arrowhead = normal];
  //   }
  const dot = `
digraph ATN {
  rankdir=LR;
  ${els.map(e=>e.text).join('\n  ')}
}`.trim()
  return dot
}

interface E {
  id: string;
  nodes: Node[];
  text: string;
}
