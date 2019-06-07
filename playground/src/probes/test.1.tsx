
// // import cytoscape from 'https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.7.0/cytoscape.esm.js'
// // debugger
// import cytoscape from 'cytoscape'
// import { randomIntBetween, array, unique } from 'misc-utils-of-mine-generic';
// import { visitDescendants } from '../../../dist/src';
// import { ast } from './ast111';
// import { Component } from 'react';
// import  * as React from 'react';
// import { Segment } from 'semantic-ui-react';
// import { render } from 'react-dom';

// let evenParent = require('cytoscape-even-parent');
// var navigator = require('cytoscape-navigator');
// cytoscape.use( evenParent ); // register extension
// cytoscape.use( navigator ); // register extension

// const nodes: any[] = []
// visitDescendants({node: ast() as any, visitor: (n:any, p:any,l)=>{
//   if(!n){
//     return false
//   }if(p){
//     p.id=p.id||unique(p.type) 
//   }else {

//   }
//   n.id=unique(n.type|| 'ROOT')
//   //   nodes.push({
//   //  data: {  id: n.id ,}
//   //   //  parent: p.id
//   //   }, 
//         nodes.push({
//          data: {  id: n.id ,}
//           //  parent: p.id
//           // }, ...p?[{

//           // }]:[])
//         })
//         if(p){
// nodes.push({    data: { id: p.id+n.id, source: p.id, target: n.id}})
//         }
// return false
// }, childrenFirst: false})
// // function vv(n: any, p: any){
// //   debugger
// //   if(!n){
// //     return
// //   }if(p){
// //     p.id=p.id||unique(p.type)
// //   }
// //   // p.id=p&&(p.id||unique(p.type))
// //   n.id= n.id||unique(n.type)
// //     nodes.push({
// //      id: n.id ,
// //     //  parent: p.id
// //     }, ...p?[{
// //       id: p.id+n.id, source: p.id, target: n.id
// //     }]:[])
// //   p.children.forEach((cc:any)=>vv(cc, n))
// // }

// // vv(ast(), null)
// console.log(nodes.length);
// interface S {
//   childrenSize: number,
//   horizontalPadding: number
//   verticalPadding: number
//   fontSize: number,          // 0 to ~  ::: Size of font
//   edgeSize: number,          // 0 to ~  ::: Size of edge
//   horizontalSpread: boolean,  // boolean ::: Spread the graph horizontally if true
// }
// class Controls extends Component<{}, S> {
//   state={
//    ...defaultLayoutOptions
//   }
//   setState(s: any){
//     // debugger
//     cy.layout({...defaultLayoutOptions, ...s}).run()
//     super.setState(s)
//   }
//   render(){
//     return <Segment>
//       <label >children Size <input type="number" step={0.1} onChange={e=>{
//         var v= parseFloat(e.currentTarget.value)
//         if(v!==NaN){
//           this.setState({
//             childrenSize:v
//           })        
//         }
//       }}
//       defaultValue={this.state.childrenSize+''}></input></label><br/>
//        <label >horizontal Padding <input type="number" step={100} onChange={e=>{
//         var v= parseFloat(e.currentTarget.value)
//         if(v!==NaN){
//           this.setState({
//             horizontalPadding:v
//           })        
//         }
//       }}
//       defaultValue={this.state.horizontalPadding+''}></input></label><br/>
//        <label >vertical Padding <input type="number" step={100} onChange={e=>{
//         var v= parseFloat(e.currentTarget.value)
//         if(v!==NaN){
//           this.setState({
//             verticalPadding:v
//           })        
//         }
//       }}
//       defaultValue={this.state.verticalPadding+''}></input></label><br/>
//        <label >font Size <input type="number" step={50} onChange={e=>{
//         var v= parseFloat(e.currentTarget.value)
//         if(v!==NaN){
//           this.setState({
//             fontSize:v
//           })        
//         }
//       }}
//       defaultValue={this.state.fontSize+''}></input></label><br/>
//        <label >edge Size <input type="number" step={50} onChange={e=>{
//         var v= parseFloat(e.currentTarget.value)
//         if(v!==NaN){
//           this.setState({
//             edgeSize:v
//           })        
//         }
//       }}
//       defaultValue={this.state.edgeSize+''}></input></label><br/>
//        <label >horizontal Spread <input type="checkbox" onChange={e=>{
//         // var v= parseFloat(e.currentTarget.value)
//         // if(v!==NaN){
//           this.setState({
//             horizontalSpread: !!e.currentTarget.checked
//           })        
//         // }
//       }}
//       defaultChecked={this.state.horizontalSpread}></input></label><br/>
//        {/* childrenSize: 1,          // 1 to ~  ::: Proportion of children/parent
//       horizontalPadding: 12330,  // 0 to ~  ::: Horizontal padding between nodes
//       verticalPadding: 2000,    // 0 to ~  ::: Vertical padding between nodes
//       fontSize: 1234,           // 0 to ~  ::: Size of font
//       edgeSize: 1236,            // 0 to ~  ::: Size of edge
//       horizontalSpread: true,  // boolean ::: Spread the graph horizontally if true
//       smart: false        */}
//     </Segment>
//   }
// }
// const defaultLayoutOptions = {
//   name: 'evenParent',
//   childrenSize: 1,          // 1 to ~  ::: Proportion of children/parent
//   horizontalPadding: 12330,  // 0 to ~  ::: Horizontal padding between nodes
//   verticalPadding: 2000,    // 0 to ~  ::: Vertical padding between nodes
//   fontSize: 1234,           // 0 to ~  ::: Size of font
//   edgeSize: 1236,            // 0 to ~  ::: Size of edge
//   horizontalSpread: true,  // boolean ::: Spread the graph horizontally if true
//   smart: false              // boolean ::: If true, displays children in rows to get maximum node width

// }
// var cy = cytoscape({
//   container: document.getElementById('cy'), // container to render in
//   elements: [ // list of graph elements to start with
//   //   { // node a
//   //     data: { id: 'a', parent: 'a1' }
//   //   },
//   //   { // node b
//   //     data: { id: 'b' ,  parent: 'a1'}
//   //   },
//   //   { // edge ab
//   //     data: { id: 'ab', source: 'a', target: 'b' }
//   //   },
//   // ...array(3).map(i=>([
//   //   { // node a
//   //     data: { id: 'a'+i }
//   //   },
//   //   { // node b
//   //     data: { id: 'b'+i }
//   //   },
//   //   { // edge ab
//   //     data: { id: 'ab'+i, source: 'a'+i,
//   //     // +(200-i), 
//   //     target: 'b'
//   //     +i 
//   //   }
//     // },
//     ...nodes.filter(n=>n&&n.data), 
//   // ])).flat(),


//   ],
//   style: [ // the stylesheet for the graph
//     {
//       selector: 'node',
//       style: {
//         'background-color': '#666',
//         'label': 'data(id)'
//       }
//     },
//     {
//       selector: 'edge',
//       style: {
//         'width': 3,
//         'line-color': '#ccc',
//         'target-arrow-color': '#ccc',
//         'target-arrow-shape': 'triangle'
//       }
//     }
//   ],
//   layout: {
//     // name: 'random',
//     // rows: 10
//     // layout: {

//    ...defaultLayoutOptions
//     // },
//   } as any
// });


// // var cy = cytoscape({ /* ... */ });

// var defaults = {
//     container: false // can be a HTML or jQuery element or jQuery selector
//   , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
//   , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
//   , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
//   , dblClickDelay: 200 // milliseconds
//   , removeCustomContainer: true // destroy the container specified by user on plugin destroy
//   , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
// };

// var nav = (cy as any).navigator( defaults ); // get navigator instance, nav


// render(<Controls/>, document.getElementById('controls')!)

// // let options = {
// //   name: 'breadthfirst',

// //   fit: true, // whether to fit the viewport to the graph
// //   directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
// //   padding: 30, // padding on fit
// //   circle: true, // put depths in concentric circles if true, put depths top down if false
// //   // grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
// //   spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
// //   // boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
// //   // avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
// //   nodeDimensionsIncludeLabels: true, // Excludes the label when calculating node bounding boxes for the layout algorithm
// //   roots: undefined, // the roots of the trees
// //   maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
// //   animate: true, // whether to transition the node positions
// //   animationDuration: 2500, // duration of animation in ms if enabled
// //   animationEasing: undefined, // easing of animation if enabled,
// //   // animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
// //   // ready: undefined, // callback on layoutready
// //   // stop: undefined, // callback on layoutstop
// //   // transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
// // };
// // // cy.layout(options).run()



// // cy.s
