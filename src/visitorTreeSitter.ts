import { SyntaxNode } from 'web-tree-sitter'
import { GetAstOptions, Node, NodePosition, Normalizer } from './types'

/**
 * Must return the same kind of object than returned by Visitor
 */
export class TreeSitterVisitor implements Normalizer<SyntaxNode> {

  private _options: GetAstOptions | undefined

  public get options(): GetAstOptions | undefined {
    return this._options
  }
  public set options(value: GetAstOptions | undefined) {
    this._options = value
  }

  getAst(): Node {
    if (!this.options) {
      throw new Error('Options not set')
    }
    const node = this.options.root
    if (!node) {
      throw new Error('options.root is mandatory for tree-sitter based parsers and none was given')
    }
    const map = (sn: SyntaxNode) => {
      const n: Node = {
        ...this.getNode(sn),
        children: (sn.children || []).map(map)
      }
      return n
    }
    return map(node)
  }
  getNode(sn: SyntaxNode): Node {
    return {
      type: sn.type,
      text: this.options!.text ? sn.text : undefined,
      start: !this.options!.omitPosition ? this.getStartPosition(sn) : undefined,
      stop: !this.options!.omitPosition ? this.getStopPosition(sn) : undefined,
      children: []
    }
  }

  protected getStopPosition(sn: SyntaxNode): NodePosition | undefined {
    return {
      column: sn.endPosition.column,
      line: sn.endPosition.row,
      start: sn.endIndex - sn.text.length,
      stop: sn.endIndex
    }
  }

  protected getStartPosition(sn: SyntaxNode): NodePosition | undefined {
    return {
      column: sn.startPosition.column,
      line: sn.startPosition.row,
      start: sn.startIndex - sn.text.length,
      stop: sn.startIndex
    }
  }

}
