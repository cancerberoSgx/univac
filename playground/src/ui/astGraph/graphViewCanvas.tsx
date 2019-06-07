
import  * as React from 'react';

interface S {
  onClient?: boolean
}
interface P {
  placeholder: JSX.Element
  html: string
  afterRender():void
}
/**
 * Placeholder when needing to prevent react to update/remove child nodes (for rich components like monaco-editor , d3 graphs, etc) that cannnot be updated / recreated each time the state changes. Sage example: 
 * 
 * ``` 
  render() {
    return  <GraphViewCanvas 
    placeholder={
      <div style={{ height:'500px', width: '500px' }}>
        Try to reserve best guess height, placeholder graphic, etc and also add other controls.
        <Controls setOptions={o=>this.setControlOptions(o)}/>
      </div>
    }
    html={`
      <div class="astGraphCanvasContainer">HHHOOOLA</div>
      <div class="astGraphMinimapContainer"  ></div>
    `} // this won't re-render
    afterRender={()=>{
      // host component will be notified by us when the innerHtml placeholders are rendered and attached. so they can mount the rich widgets.
      const canvasContainer = document.querySelector<HTMLDivElement>('.astGraphCanvasContainer')
      const minimapContainer = document.querySelector<HTMLDivElement>('.astGraphMinimapContainer')
      this.canvasContainerReady(canvasContainer)
      this.navigatorContainerReady (minimapContainer)
    }}
  />
  }
 * ```
 * */
export class GraphViewCanvas extends React.Component<P, S> {
  shouldComponentUpdate() {
    return !this.state.onClient
  }
  componentDidUpdate(){
    this.props.afterRender()
  }
  componentDidMount() {
    this.setState({
      onClient: true
    } )
  }
  state = {
    onClient: false
  }
  render() {  
    if (!this.state.onClient) {
      return this.props.placeholder;
    }
    return <div dangerouslySetInnerHTML={{ __html: this.props.html }} />;
  }

}

