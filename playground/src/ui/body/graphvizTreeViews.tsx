import * as React from 'react'
import { renderDot, treeToDot } from 'render-dot'
import { visitDescendants } from 'univac'
import { AbstractComponent } from '../component'
import { State } from '../../app/state';

interface P {
  engine: 'dot'
}
export class GraphvizTreeViews extends AbstractComponent<P> {
  shouldComponentUpdate(nextProps: any, nextState: Readonly<State>, nextContext: any) {
    return nextState.ast !== this.state.ast || nextProps.engine !== this.props.engine
  }

  render() {
    return (
      <div ref={c => this.addSvg(c)}></div>
    )
  }
  
  async addSvg(c: HTMLDivElement | null) {
    if (!c) {
      return
    }
    function countDescendants(n: any) {
      let counter = 0
      visitDescendants({ node: n, visitor: n => { counter++; return false } })
      return counter
    }
    visitDescendants({
      node: this.state.ast, visitor: (n: any) => {
        n.label = n.type
        n.attrs = n.attrs || {}
        n.attrs.area = countDescendants(n)
        return false
      }
    })
    const dot = treeToDot({ node: this.state.ast as any })
    const svg = await renderDot({ input: dot.dot })
    c.innerHTML = svg

    const svgPanZoom = require('svg-pan-zoom')
    const panZoomInstance = svgPanZoom(c.querySelector('svg'), {
      zoomEnabled: true,
      controlIconsEnabled: true,
      // fit: true,
      // center: true,
      minZoom: 0.1
    })
    // await sleep(200)
    // panZoomInstance.updateBBox(); // Update viewport bounding box
    // await sleep(200)

    // panZoomTiger.zoomAtPoint(2, {x: 50, y: 50})
    panZoomInstance.zoomAtPoint(0.4, { x: 22, y: 22 })
    // await sleep(200)

    // panZoomInstance.updateBBox(); // Update viewport bounding box
    // await sleep(200)
    // panZoomInstance.fit();
    // await sleep(200)
    // panZoomInstance.center();
    // await sleep(200)
    // panZoomInstance.updateBBox(); // Update viewport bounding box

  }
}
