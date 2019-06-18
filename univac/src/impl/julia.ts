import { ParserImpl, preventRedundantTypeNames } from '../parserImpl'

export function getJuliaImpl(): ParserImpl {
  return {
    treeSitterParser: 'tree-sitter-julia.wasm',
    redundantTypes: (node, parent) => preventRedundantTypeNames(node, parent, node => [' '].includes(node.type))
  }
}
