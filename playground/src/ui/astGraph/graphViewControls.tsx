import { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import {Core, LayoutOptions, BaseLayoutOptions} from 'cytoscape'
import  * as React from 'react';
import cytoscape from 'cytoscape'

let evenParent = require('cytoscape-even-parent');
cytoscape.use( evenParent ); // register extension


export interface AstGraphViewOptions extends BaseLayoutOptions {
  childrenSize: number;
  horizontalPadding: number;
  verticalPadding: number;
  fontSize: number; // 0 to ~  ::: Size of font
  edgeSize: number; // 0 to ~  ::: Size of edge
  horizontalSpread: boolean; // boolean ::: Spread the graph horizontally if true
  smart: boolean// boolean ::: If true, displays children in rows to get maximum node width

}
interface P{
  setOptions(o: Partial<AstGraphViewOptions>):void
}

export const defaultAstGraphViewOptions: AstGraphViewOptions = {
  name: 'evenParent',
  childrenSize: 1,
  horizontalPadding: 12330,
  verticalPadding: 2000,
  fontSize: 1234,
  edgeSize: 1236,
  horizontalSpread: true,
  smart: false
};

export class Controls extends Component<P, AstGraphViewOptions> {
  // componentDidMount(){
  // }

  state = {
    ...defaultAstGraphViewOptions
  }
  
  // setState(s: any) {
  //   this.props.setOptions(s)
  //   // this.props.cy.layout({ ...defaultLayoutOptions, ...s }).run();
  //   super.setState(s);
  // }



  render() {
    return <Segment className="astGraphControlsContainer">
      <label>children Size <input type="number" step={0.1} onChange={e=>{
         var v = parseFloat(e.currentTarget.value)
      if (v !== NaN) {
        // this.setOptions({childrenSize: v}  )
        this.props.setOptions({childrenSize: v})
      }
   } }
    defaultValue={this.state.childrenSize + ''}></input></label><br />
      <label>horizontal Padding <input type="number" step={100} onChange={e => {
        var v = parseFloat(e.currentTarget.value);
        if (v !== NaN) {
          this.setState({
            horizontalPadding: v
          });
        }
      }} defaultValue={this.state.horizontalPadding + ''}></input></label><br />
      <label>vertical Padding <input type="number" step={100} onChange={e => {
        var v = parseFloat(e.currentTarget.value);
        if (v !== NaN) {
          this.setState({
            verticalPadding: v
          });
        }
      }} defaultValue={this.state.verticalPadding + ''}></input></label><br />
      <label>font Size <input type="number" step={50} onChange={e => {
        var v = parseFloat(e.currentTarget.value);
        if (v !== NaN) {
          this.setState({
            fontSize: v
          });
        }
      }} defaultValue={this.state.fontSize + ''}></input></label><br />
      <label>edge Size <input type="number" step={50} onChange={e => {
        var v = parseFloat(e.currentTarget.value);
        if (v !== NaN) {
          this.setState({
            edgeSize: v
          });
        }
      }} defaultValue={this.state.edgeSize + ''}></input></label><br />
      <label>horizontal Spread <input type="checkbox" onChange={e => {
        this.setState({
          horizontalSpread: !!e.currentTarget.checked
        });
      }} defaultChecked={this.state.horizontalSpread}></input></label><br />

      <label>smart <input type="checkbox" onChange={e => {
        this.setState({
          smart: !!e.currentTarget.checked
        });
      }} defaultChecked={this.state.smart}></input></label><br />

    </Segment>;
  }

  // private setOptions(value: Partial<S> )  {
  //     // var v = parseFloat(e.currentTarget.value);
  //     // if (v !== NaN) {
  //       this.setState(value as any)
  //       this.props.setOptions(value)
  //     // }
  // }
}

