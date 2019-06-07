import cytoscape from 'cytoscape'
import * as React from 'react'
import { AbstractComponent } from '../component'
import './astGraph.css'
import { getGraphNodesFor } from './buildGraphNodes'
import { GraphViewCanvas } from './graphViewCanvas'
import { AstGraphViewOptions, Controls, defaultAstGraphViewOptions } from './graphViewControls'
import { Node } from 'univac';
import { highlightNodesInEditor } from '../../editor/codeEditor';
var navigator = require('cytoscape-navigator')
cytoscape.use(navigator)

var navigatorDefaults = {
  container: null//document.getElementById('minimap') // can be a HTML or jQuery element or jQuery selector
  , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
  , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
  , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
  , dblClickDelay: 200 // milliseconds
  , removeCustomContainer: true // destroy the container specified by user on plugin destroy
  , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
}

export class AstGraph extends AbstractComponent {
  cy: cytoscape.Core | undefined

  render() {
    return <>
      <Controls setOptions={o => this.setControlOptions(o)} />
      <GraphViewCanvas
        placeholder={
          <div style={{ height: '500px', width: '500px' }}>
            Try to reserve best guess height, placeholder graphic, etc
      </div>
        }
        html={`
<div class="astGraphCanvasContainer"></div> 
<div class="astGraphMinimapContainer"></div>
    `} // this won't re-render
        afterRender={() => {
          const canvasContainer = document.querySelector<HTMLDivElement>('.astGraphCanvasContainer')
          const minimapContainer = document.querySelector<HTMLDivElement>('.astGraphMinimapContainer')
          this.canvasContainerReady(canvasContainer)
          this.navigatorContainerReady(minimapContainer)
        }}
      />
    </>
  }

  setControlOptions(o: Partial<AstGraphViewOptions>): void {
    const f = { ...defaultAstGraphViewOptions, ...o }
    this.cy!.layout(f).run()
    this.setState({ argGraphViewOptions: f })
  }

  navigatorContainerReady(container: HTMLDivElement | null): void {
    if (!container) {
      return
    }
    (this.cy as any).navigator({ ...navigatorDefaults, container })
  }

  canvasContainerReady(container: HTMLDivElement | null): void {
    if (!container) {
      return
    }
    let node = this.state.ast
    const elements = getGraphNodesFor(node).map(e=>({
      ...e,
      grabbable: true, // whether the node can be grabbed and moved by the user
      pannable: false, // whether dragging the node causes panning instead of grabbing
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
    this.cy.on('click', e=>{
      const node = e.target.data().__astNode as Node      
      if(!node){
        return
      }
      highlightNodesInEditor([node])
    } )

  }
}

