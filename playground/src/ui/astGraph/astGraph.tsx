import cytoscape from 'cytoscape'
import FileSaver from 'file-saver'
import * as React from 'react'
import { Node } from 'univac'
import { highlightNodesInEditor } from '../../editor/codeEditor'
import { Space } from '../common/uiUtil'
import { AbstractComponent } from '../component'
import { getGraphNodesFor } from './buildGraphNodes'
import { GraphViewCanvas } from './graphViewCanvas'
import { AstGraphViewOptions, Controls, defaultAstGraphViewOptions } from './graphViewControls'

export class AstGraph extends AbstractComponent {
  cy: cytoscape.Core | undefined
  svg: string = ''
  canvasContainer: HTMLDivElement | null = null

  render() {
    return <>

      <a href="#" onClick={async e => {
        FileSaver.saveAs(new Blob([JSON.stringify({ nodes: (this.cy!.json() as any).elements!.nodes.map((n: any) => ({ ...n, data: null })), edges: (this.cy!.json() as any).elements.edges.map((n: any) => ({ ...n, data: null })) })]), 'ast.json')
      }}>
        JSON
          </a><Space />
      <a href="#" onClick={async e => {
        const c = this.canvasContainer!.querySelectorAll<HTMLCanvasElement>('canvas')
        c[c.length - 1].toBlob(b => {
          FileSaver.saveAs(b!, 'ast.png')
        }, 'image/png')
      }}>
        PNG
          </a><Space />
      <Controls setOptions={o => this.setControlOptions(o)} />
      <GraphViewCanvas
        placeholder={
          <div style={{ height: '500px', width: '1200px' }}>
            Try to reserve best guess height, placeholder graphic, etc
      </div>
        }
        html={`
<div class="astGraphCanvasContainer"></div> 
    `} // this won't re-render
        afterRender={() => {
          this.canvasContainer = document.querySelector<HTMLDivElement>('.astGraphCanvasContainer')
          this.canvasContainerReady(this.canvasContainer)
        }}
      />
    </>
  }

  setControlOptions(o: Partial<AstGraphViewOptions>): void {
    const f = { ...defaultAstGraphViewOptions, ...o }
    this.cy!.layout(f).run()
    this.setState({ argGraphViewOptions: f })
  }

  canvasContainerReady(container: HTMLDivElement | null): void {
    if (!container) {
      return
    }
    let node = this.state.ast
    const elements = getGraphNodesFor(node).map(e => ({
      ...e,
      grabbable: true, // whether the node can be grabbed and moved by the user
      pannable: true, // whether dragging the node causes panning instead of grabbing
    }))
    this.cy = cytoscape({
      container,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#955a9',
            'label': 'data(id)'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#66bb11',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: {
        ...defaultAstGraphViewOptions, container
      } as any
    })
    container.querySelector<HTMLCanvasElement>('canvas')!.toBlob(b => {
      debugger
    }, 'image/png')
    this.cy.on('click', e => {
      const node = e.target.data().__astNode as Node
      if (!node) {
        return
      }
      highlightNodesInEditor([node])
    })

  }
}

