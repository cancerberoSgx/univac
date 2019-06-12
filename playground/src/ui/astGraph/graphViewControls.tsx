import cytoscape, { BaseLayoutOptions } from 'cytoscape'
import * as React from 'react'
import { Component } from 'react'
import { Segment } from 'semantic-ui-react'

let evenParent = require('cytoscape-even-parent')
cytoscape.use(evenParent)

export interface AstGraphViewOptions extends BaseLayoutOptions {
  childrenSize: number;
  horizontalPadding: number;
  verticalPadding: number;
  fontSize: number; // 0 to ~  ::: Size of font
  edgeSize: number; // 0 to ~  ::: Size of edge
  horizontalSpread: boolean; // boolean ::: Spread the graph horizontally if true
  smart: boolean// boolean ::: If true, displays children in rows to get maximum node width

}
interface P {
  setOptions(o: Partial<AstGraphViewOptions>): void
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
}

export class Controls extends Component<P, AstGraphViewOptions> {

  state = {
    ...defaultAstGraphViewOptions
  }

  render() {
    return <Segment basic className="astGraphControlsContainer">

      <label>Children Size<input type="number" step={0.1}
        onChange={e => this.setNumberOption(e, 'childrenSize')}
        defaultValue={this.state.childrenSize + ''}></input></label><br />

      <label>Horizontal Padding<input type="number" step={100}
        onChange={e => this.setNumberOption(e, 'horizontalPadding')}
        defaultValue={this.state.horizontalPadding + ''}></input></label><br />

      <label>Vertical Padding<input type="number" step={100}
        onChange={e => this.setNumberOption(e, 'verticalPadding')}
        defaultValue={this.state.verticalPadding + ''}></input></label><br />

      <label>Font Size<input type="number" step={50}
        onChange={e => this.setNumberOption(e, 'fontSize')}
        defaultValue={this.state.fontSize + ''}></input></label><br />

      <label>Edge Size<input type="number" step={50}
        onChange={e => this.setNumberOption(e, 'edgeSize')}
        defaultValue={this.state.edgeSize + ''}></input></label><br />

      <label>horizontal Spread<input type="checkbox"
        onChange={e => this.props.setOptions({ horizontalSpread: !!e.currentTarget.checked })}
        defaultChecked={this.state.horizontalSpread}></input></label><br />

      <label>Smart<input type="checkbox"
        onChange={e => this.props.setOptions({ smart: !!e.currentTarget.checked })}
        defaultChecked={this.state.smart}></input></label><br />

    </Segment>
  }


  private setNumberOption(e: React.ChangeEvent<HTMLInputElement>, name: string) {
    var v = parseFloat(e.currentTarget.value)
    if (v !== NaN) {
      this.props.setOptions({ [name]: v })
    }
  }
}

