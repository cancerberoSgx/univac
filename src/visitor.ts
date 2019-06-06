import { Ctx, CtxPosition } from './antlr4Types'
import { GetAstOptions, Node, NodePosition } from './types'

export class Visitor {

  protected currentParent: Node | undefined

  constructor(protected options: GetAstOptions) {
  }

  getAst() {
    if (!this.currentParent) {
      throw new Error('tree.accept(visitor) not called. ')
    }
    else {
      return this.currentParent
    }
  }

  visitChildren(ctx: Ctx) {
    if (!ctx) {
      return
    }
    let node = this.getNode(ctx)
    if (!this.currentParent) {
      this.currentParent = node
    }
    else {
      this.currentParent.children!.push(node)
      if (this.options.parents) {
        node.parent = this.currentParent
      }
    }
    if (ctx.children) {
      let previous = this.currentParent
      this.currentParent = node
      const result = ctx.children.map(child => {
        if (child.children && child.children.length) {
          return child.accept(this)
        }
        else {
          return child.getText()
        }
      })
      this.currentParent = previous
      return result
    }
    return node
  }

  getNode(ctx: Ctx): Node {
    return {
      type: ctx.parser.ruleNames[ctx.ruleIndex] || ctx.constructor.name,
      start: !this.options.omitPosition ? this.getPosition(ctx.start) : undefined,
      stop: !this.options.omitPosition ? this.getPosition(ctx.stop) : undefined,
      text: this.options.text ? ctx.getText() : undefined,
      children: []
    }
  }

  getPosition(start: CtxPosition): NodePosition {
    const source = start.source.find(e => typeof e.strdata === 'string')
    return {
      start: start.start,
      stop: start.stop,
      line: start.line,
      column: start.column,
      text: start.text,
      source: this.options.positionSource && source && source.strdata as string
    }
  }
}
