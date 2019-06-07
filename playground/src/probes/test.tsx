
// import cytoscape from 'https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.7.0/cytoscape.esm.js'
// debugger
import cytoscape from 'cytoscape'
import { randomIntBetween, array, unique } from 'misc-utils-of-mine-generic';
import { visitDescendants } from '../../../dist/src';
import { ast } from './ast111';
import { Component } from 'react';
import  * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { render } from 'react-dom';

let evenParent = require('cytoscape-even-parent');
var navigator = require('cytoscape-navigator');
cytoscape.use( evenParent ); // register extension
cytoscape.use( navigator ); // register extension

const nodes: any[] = []
visitDescendants({node: ast() as any, visitor: (n:any, p:any,l)=>{
  if(!n){
    return false
  }if(p){
    p.id=p.id||unique(p.type) 
  }else {

  }
  n.id=unique(n.type|| 'ROOT')
  //   nodes.push({
  //  data: {  id: n.id ,}
  //   //  parent: p.id
  //   }, 
        nodes.push({
         data: {  id: n.id ,}
          //  parent: p.id
          // }, ...p?[{
       
          // }]:[])
        })
        if(p){
nodes.push({    data: { id: p.id+n.id, source: p.id, target: n.id}})
        }
return false
}, childrenFirst: false})
// function vv(n: any, p: any){
//   debugger
//   if(!n){
//     return
//   }if(p){
//     p.id=p.id||unique(p.type)
//   }
//   // p.id=p&&(p.id||unique(p.type))
//   n.id= n.id||unique(n.type)
//     nodes.push({
//      id: n.id ,
//     //  parent: p.id
//     }, ...p?[{
//       id: p.id+n.id, source: p.id, target: n.id
//     }]:[])
//   p.children.forEach((cc:any)=>vv(cc, n))
// }
// vv(ast(), null)
// console.log(nodes.length);
interface S {
  childrenSize: number,
  horizontalPadding: number
  verticalPadding: number
  fontSize: number,          // 0 to ~  ::: Size of font
  edgeSize: number,          // 0 to ~  ::: Size of edge
  horizontalSpread: boolean,  // boolean ::: Spread the graph horizontally if true
}
class Controls extends Component<{}, S> {
  state={
   ...defaultLayoutOptions
  }
  setState(s: any){
    // debugger
    cy.layout({...defaultLayoutOptions, ...s}).run()
    super.setState(s)
  }
  render(){
    return <Segment>
      <label >children Size <input type="number" step={0.1} onChange={e=>{
        var v= parseFloat(e.currentTarget.value)
        if(v!==NaN){
          this.setState({
            childrenSize:v
          })        
        }
      }}
      defaultValue={this.state.childrenSize+''}></input></label><br/>
       <label >horizontal Padding <input type="number" step={100} onChange={e=>{
        var v= parseFloat(e.currentTarget.value)
        if(v!==NaN){
          this.setState({
            horizontalPadding:v
          })        
        }
      }}
      defaultValue={this.state.horizontalPadding+''}></input></label><br/>
       <label >vertical Padding <input type="number" step={100} onChange={e=>{
        var v= parseFloat(e.currentTarget.value)
        if(v!==NaN){
          this.setState({
            verticalPadding:v
          })        
        }
      }}
      defaultValue={this.state.verticalPadding+''}></input></label><br/>
       <label >font Size <input type="number" step={50} onChange={e=>{
        var v= parseFloat(e.currentTarget.value)
        if(v!==NaN){
          this.setState({
            fontSize:v
          })        
        }
      }}
      defaultValue={this.state.fontSize+''}></input></label><br/>
       <label >edge Size <input type="number" step={50} onChange={e=>{
        var v= parseFloat(e.currentTarget.value)
        if(v!==NaN){
          this.setState({
            edgeSize:v
          })        
        }
      }}
      defaultValue={this.state.edgeSize+''}></input></label><br/>
       <label >horizontal Spread <input type="checkbox" onChange={e=>{
          this.setState({
            horizontalSpread: !!e.currentTarget.checked
          })        
      }}
      defaultChecked={this.state.horizontalSpread}></input></label><br/>

<label >smart <input type="checkbox" onChange={e=>{
          this.setState({
            smart: !!e.currentTarget.checked
          })        
      }}
      defaultChecked={this.state.smart}></input></label><br/>
      {/* smart: false        */}  
    </Segment>
  }
}
const defaultLayoutOptions = {
  name: 'evenParent',
  childrenSize: 1,          // 1 to ~  ::: Proportion of children/parent
  horizontalPadding: 12330,  // 0 to ~  ::: Horizontal padding between nodes
  verticalPadding: 2000,    // 0 to ~  ::: Vertical padding between nodes
  fontSize: 1234,           // 0 to ~  ::: Size of font
  edgeSize: 1236,            // 0 to ~  ::: Size of edge
  horizontalSpread: true,  // boolean ::: Spread the graph horizontally if true
  smart: false              // boolean ::: If true, displays children in rows to get maximum node width

}
var cy = cytoscape({
  container: document.getElementById('cy'), // container to render in
  elements: [ // list of graph elements to start with
    ...nodes.filter(n=>n&&n.data), 
  ],
  style: [ // the stylesheet for the graph
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
   ...defaultLayoutOptions
  } as any
});

var defaults = {
    container: document.getElementById('minimap') // can be a HTML or jQuery element or jQuery selector
  , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
  , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
  , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
  , dblClickDelay: 200 // milliseconds
  , removeCustomContainer: true // destroy the container specified by user on plugin destroy
  , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
};

var nav = (cy as any).navigator( defaults ); // get navigator instance, nav


render(<Controls/>, document.getElementById('controls')!)
