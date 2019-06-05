import { Ctx, CtxPosition } from './antlr4Types'
import { GetAstOptions, Node } from './types'

let n: Partial<Node> = {
  children: []
}

export function getVisitorResult() {
  return n.children![0]
}

export class Visitor {
  constructor(protected options: GetAstOptions) {
  }
  visitChildren(ctx: Ctx) {
    if (!ctx) {
      return
    }
    let node = this.getNode(ctx)
    n.children!.push(node)
    if (ctx.children) {
      let previous = n
      n = node
      const result = ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          let c = this.getNode(child)
          const result = child.accept(this)
          return result
        }
        else {
          return child.getText()
        }
      })
      n = previous
      return result
    }
    return node
  }
  getNode(ctx: Ctx) {
    return {
      type: ctx.parser.ruleNames[ctx.ruleIndex] || ctx.constructor.name,
      start: this.getLocation(ctx.start),
      stop: this.getLocation(ctx.stop),
      // exception: ctx.exception,
      // invokingState: ctx.invokingState,
      children: []
    }
  }
  getLocation(start: CtxPosition) {
    const source = start.source.find(e => typeof e.strdata === 'string')
    return {
      // token: start.getTokenSource().text,
      type: start.type,
      // channel: start.channel,
      start: start.start,
      stop: start.stop,
      // tokenIndex: start.tokenIndex,
      line: start.line,
      column: start.column,
      text: start.text,
      source: this.options.includeSource && source && source.strdata as string
    }
  }
}
