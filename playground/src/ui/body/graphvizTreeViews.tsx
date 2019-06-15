import FileSaver from 'file-saver'
import * as React from 'react'
import { Options, renderDot, graphToDot } from 'render-dot'
import { svg2png } from 'svg-png-converter'
import { visitDescendants } from 'univac'
import { State } from '../../app/state'
import { Space } from '../common/uiUtil'
import { AbstractComponent } from '../component'

interface P {
  engine: 'dot' | 'patchwork' | 'fdp' | 'neato'
}

export class GraphvizTreeViews extends AbstractComponent<P> {
  protected svg: string = ''
  protected dot: string = ''

  shouldComponentUpdate(nextProps: any, nextState: Readonly<State>, nextContext: any) {
    return nextState.ast !== this.state.ast || nextProps.engine !== this.props.engine
  }

  render() {
    return (
      <>
        <a href="#" onClick={e => {
          var blob = new Blob([this.svg], { type: 'image/svg+xml;charset=utf-8' })
          FileSaver.saveAs(blob, 'ast.svg')
        }}>
          SVG
          </a><Space />
        <a href="#" onClick={e => {
          var blob = new Blob([this.dot], { type: 'text/plain;charset=utf-8' })
          FileSaver.saveAs(blob, 'ast.dot')
        }}>
          DOT
          </a><Space />
        <a href="#" onClick={async e => {
          const content = await svg2png({ input: this.svg, format: 'png', encoding: 'buffer' })
          debugger
          var blob = new Blob([content], { type: 'image/png' })
          FileSaver.saveAs(blob, 'ast.png')
        }}>
          PNG
          </a><Space />
        <a href="#" onClick={async e => {
          const { output } = await this.renderAst({}, { format: 'ps' })
          var blob = new Blob([output], { type: 'application/postscript' })
          FileSaver.saveAs(blob, 'ast.ps')
        }}>
          PS
          </a>

        <div ref={c => this.addSvg(c)}></div></>
    )
  }

  protected async addSvg(c: HTMLDivElement | null) {
    if (!c) {
      return
    }
    const { dot, output } = await this.renderAst()
    this.dot = dot.dot
    this.svg = output
    c.innerHTML = this.svg
    const svgPanZoom = require('svg-pan-zoom')
    const panZoomInstance = svgPanZoom(c.querySelector('svg'), {
      zoomEnabled: true,
      controlIconsEnabled: true,
      minZoom: 0.1
    })
    panZoomInstance.zoomAtPoint(0.4, { x: 22, y: 22 })
  }

  async renderAst(graphToDotExtraOptions = {}, renderDotExtraOptions: Partial<Options> = {}) {
    function countDescendants(n: any) {
      let counter = 0
      visitDescendants({ node: n, visitor: n => { counter++; return false } })
      return counter
    }
    visitDescendants({
      node: this.state.ast, visitor: (n: any) => {
        n.label = n.type.replace(/[\"]+/g, '\\"').replace(/[\n]+/g, '\\n').replace(/[\$\[]+/g, '_')
        n.attrs = n.attrs || {}
        n.attrs.area = countDescendants(n)
        return false
      }
    })
    const dot = graphToDot({ node: this.state.ast as any, name: this.state.example.name.replace(/[\s\.\-]+/g, '_'), rankdir: 'TB', 
    cluster: this.props.engine === 'patchwork', ...graphToDotExtraOptions })
    debugger
    const output = await renderDot({ input: dot.dot, engine: (this.props.engine || 'dot') as any, ...renderDotExtraOptions })
    return { dot, output }
  }
}
