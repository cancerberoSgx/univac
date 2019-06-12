import { unique } from 'misc-utils-of-mine-generic'

interface Node {
  children: Node[]
  label: string
  attrs?: any
  id?: string
}

export function treeToDot({ node, name = 'AST', cluster = false, rankdir = 'LR' }: { node: Node, name?: string, cluster?: boolean, rankdir?: 'TB' | 'LR' | 'BT' | 'RL' }) {
  const elements: E[] = []
  function f(node: Node) {
    const id = getNodeId(node)
    node.attrs = node.attrs || {}
    if (!elements.find(e => e.id === id)) {
      elements.push({ id, nodes: [node], text: `${id} [label="${node.label}"${Object.keys(node.attrs).length ? ', ' : ' '}${Object.keys(node.attrs).map(k => `${k}=${typeof node.attrs[k] === 'string' ? `"${node.attrs[k]}"` : node.attrs[k]}`).join(', ')}];` })
    }
    if (cluster) {
      elements.push({ text: `subgraph ${unique('cluster')} {`, id: unique('cluster'), nodes: node.children })
    }
    node.children.forEach(c => {
      const cid = getNodeId(c)
      c.attrs = c.attrs || {}
      if (!elements.find(c => c.id === cid)) {
        elements.push({ id: cid, nodes: [c], text: `${cid} [label="${c.label}"${Object.keys(c.attrs).length ? ', ' : ' '}${Object.keys(c.attrs).map(k => `${k}=${typeof c.attrs[k] === 'string' ? `"${c.attrs[k]}"` : c.attrs[k]}`).join(', ')}];` })
      }
      elements.push({ id: `${id} -> ${cid}`, nodes: [node, c], text: `${id} -> ${cid} ;` })
      f(c)
    })
    if (cluster) {
      elements.push({ text: `}`, id: unique('cluster'), nodes: node.children })
    }
  }
  f(node)
  const dot = `
digraph ${name} {
  rankdir=${rankdir};
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
