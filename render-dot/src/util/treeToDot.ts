import { unique } from 'misc-utils-of-mine-generic';

interface Node {
  children: Node[]
  label: string
  id?: string
}

export function treeToDot(node: Node) {
  const elements: E[] = [];
  function f(node: Node) {
    const id = getNodeId(node);
    if (!elements.find(e => e.id === id)) {
      elements.push({ id, nodes: [node], text: `${id} [fontsize=11, label="${node.label}", width=.8];` });
    }
    node.children.forEach(c => {
      const cid = getNodeId(c);
      if (!elements.find(c => c.id === cid)) {
        elements.push({ id: cid, nodes: [c], text: `${cid} [fontsize=11, label="${c.label}", width=.8];` });
      }
      elements.push({ id: `${id} -> ${cid}`, nodes: [node, c], text: `${id} -> ${cid} [fontsize=11, arrowsize=.9, arrowhead=normal];` });
      f(c);
    });
  }
  f(node);
  const dot = `
digraph ATN {
  rankdir=LR;
  ${elements.map(e => e.text).join('\n  ')}
}`.trim()

  return {
    dot, elements
  }
}

interface E {
  id: string;
  nodes: Node[];
  text: string;
}

export function getNodeId(n: Node) {
  if (!n.id) {
    n.id = unique('node')
  }
  return n.id
}