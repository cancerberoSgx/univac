import { unique } from 'misc-utils-of-mine-generic'
import { Node, visitDescendants } from 'univac'

export function getGraphNodesFor(node: Node) {
  let nodes: any[] = []
  visitDescendants({
    node, visitor: (n: any, p: any, l) => {
      if (!n) {
        return false
      }
      if (p) {
        p.id = p.id || unique(p.type)
      }
      else {
      }
      n.id = unique(n.type || 'ROOT')
      nodes.push({
        data: { id: n.id, }
      })
      if (p) {
        nodes.push({ data: { id: p.id + n.id, source: p.id, target: n.id } })
      }
      return false
    }, childrenFirst: false
  })
  return nodes
}
