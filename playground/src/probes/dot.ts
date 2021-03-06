import { writeFileSync } from 'fs'
import { Engine, graphToDot, renderDot } from 'render-dot'
import { visitDescendants } from 'univac'
import { ast } from './ast'

function countDescendants(n: any) {
  let counter = 0
  visitDescendants({ node: n, visitor: n => { counter++; return false } })
  return counter
}

async function f() {
  visitDescendants({
    node: ast, visitor: (n: any) => {
      n.label = n.type
      n.attrs = n.attrs || {}
      n.attrs.area = countDescendants(n)
      return false
    }
  })
  const dot = graphToDot({ node: ast as any, rankdir: 'BT', cluster: true })
  writeFileSync('tmp.dot', dot.dot)

  let r = await renderDot({ input: dot.dot })
  writeFileSync('tmp.svg', r.toString())

  r = await renderDot({ input: dot.dot, engine: Engine.fdp })
  writeFileSync('tmp_fdp.svg', r.toString())

  r = await renderDot({ input: dot.dot, engine: Engine.neato })
  writeFileSync('tmp_neato.svg', r.toString())

  r = await renderDot({ input: dot.dot, engine: Engine.twopi })
  writeFileSync('tmp_twopi.svg', r.toString())

  r = await renderDot({ input: dot.dot, engine: Engine.circo })
  writeFileSync('tmp_circo.svg', r.toString())

  r = await renderDot({ input: dot.dot, engine: Engine.patchwork })
  writeFileSync('tmp_patchwork.svg', r.toString())

  // r = await renderDot({input: dot.dot, engine: Engine.asage })
  // writeFileSync('tmp_asage.svg', r.toString( ))

  // r = await renderDot({input: dot.dot, engine: Engine.sfdp })
  // writeFileSync('tmp_sfdp.svg', r.toString( ))

}

f()
