import cytoscape from 'cytoscape'
import * as React from 'react'
import { AbstractComponent } from '../component'
import './astGraph.css'
import { getGraphNodesFor } from './buildGraphNodes'
import { GraphViewCanvas } from './graphViewCanvas'
import { AstGraphViewOptions, Controls, defaultAstGraphViewOptions } from './graphViewControls'
var navigator = require('cytoscape-navigator')

cytoscape.use(navigator)

// interface P{
// containerEl: HTMLElement
// }

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

  // shouldComponentUpdate(nextProps: any, nextState: Readonly<State>, nextContext: any) {
  //   return false
  // //   return nextState.ast !== this.state.ast && this.state.astAutoUpdate ||
  // //     nextState.astAutoUpdate !== this.state.astAutoUpdate ||
  // //     nextState.expandNegated !== this.state.expandNegated ||
  // //     nextState.astShowText !== this.state.astShowText ||
  // //     nextState.example.name !== this.state.example.name ||
  // //     nextState.expandedNodes.length !== this.state.expandedNodes.length
  // }

  // componentDidMount(){

  // }

  // state = {
  //   onClient: false
  // };
  // constructor(p:any,s:S){
  //   super(s,p)
  //   this.state={...this.state, onClient: false }
  // }

  // componentDidUpdate(){
  //   debugger
  //   const canvasContainer = document.querySelector<HTMLDivElement>('.astGraphCanvasContainer')
  //   const minimapContainer = document.querySelector<HTMLDivElement>('.astGraphMinimapContainer')
  //  this.canvasContainerReady(canvasContainer)
  //  this.navigatorContainerReady (minimapContainer)
  // }
  // render() {

  // }

  render() {
    // if(!this.cy){
    //   // debugger
    //   return <p>Loading...</p>
    // }
    return <>
      <Controls setOptions={o => this.setControlOptions(o)} />
      <GraphViewCanvas
        placeholder={
          <div style={{ height: '500px', width: '500px' }}>
            Try to reserve best guess height, placeholder graphic, etc
      </div>
        }
        html={`
<div class="astGraphCanvasContainer">HHHOOOLA</div>
<div class="astGraphMinimapContainer"  ></div>
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
    debugger
    if (!container) {
      return
    }
    (this.cy as any).navigator({ ...navigatorDefaults, container })
  }

  canvasContainerReady(container: HTMLDivElement | null): void {
    debugger
    if (!container) {
      return
    }
    let node = this.state.ast
    const elements = getGraphNodesFor(node)
    this.cy = cytoscape({
      container,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: {
        ...defaultAstGraphViewOptions, container
      } as any
    })

  }
}

