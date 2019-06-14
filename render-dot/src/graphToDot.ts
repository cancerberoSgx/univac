import { objectKeys, unique } from 'misc-utils-of-mine-generic'

/**
 * Represents a rendered dot Element.
 */
export interface DotElement<N = GraphNode> {
  id: string;
  nodes: N[];
  text: string;
}

/**
 * An input graph node.
 */
export interface GraphNode {
  children?: GraphNode[]
  /**
   * Desired output .dot graph node label
   */
  label: string
  /**
   * Desired dot output element attributes. 
   */
  attrs?: { [name: string]: any }
  /**
   * An unique graph node identifier. If none is given, one will be set.
   */
  id?: string
}

/**
 * Will render given graph represented by [[node]] as a .dot string. 
 */
export function graphToDot({ node, name = 'AST', cluster = false, rankdir = 'LR' }: { node: GraphNode, name?: string, cluster?: boolean, rankdir?: 'TB' | 'LR' | 'BT' | 'RL' }) {
  const elements: DotElement<GraphNode>[] = []
  function f(node: GraphNode) {
    const id = getNodeId(node)
    node.attrs = node.attrs || {}
    if (!elements.find(e => e.id === id)) {
      elements.push({ id, nodes: [node], text: `${id} [label="${node.label}"${objectKeys((node.attrs || {})).length ? ', ' : ' '}${objectKeys((node.attrs || {})).map(k => `${k}=${typeof (node.attrs || {})[k] === 'string' ? `"${(node.attrs || {})[k]}"` : (node.attrs || {})[k]}`).join(', ')}];` })
    }
    if (cluster) {
      elements.push({ text: `subgraph ${unique('cluster')} {`, id: unique('cluster'), nodes: node.children || [] })
    }
    (node.children || []).forEach(c => {
      const cid = getNodeId(c)
      c.attrs = c.attrs || {}
      if (!elements.find(c => c.id === cid)) {
        elements.push({ id: cid, nodes: [c], text: `${cid} [label="${c.label}"${objectKeys(c.attrs).length ? ', ' : ' '}${objectKeys(c.attrs).map(k => `${k}=${typeof (c.attrs || {})[k] === 'string' ? `"${(c.attrs || {})[k]}"` : (c.attrs || {})[k]}`).join(', ')}];` })
      }
      elements.push({ id: `${id} -> ${cid}`, nodes: [node, c], text: `${id} -> ${cid} ;` })
      f(c)
    })
    if (cluster) {
      elements.push({ text: `}`, id: unique('cluster'), nodes: (node.children || []) })
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

export function getNodeId(n: GraphNode) {
  if (!n) {
    return ''
  }
  if (!n.id) {
    n.id = unique('node')
  }
  return n.id
}
