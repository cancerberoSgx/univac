import { asArray, notUndefined } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Grid, Segment, Input, Label, Header, Select } from 'semantic-ui-react'
import { isArray } from 'util'
import { AbstractComponent } from '../component'

export class Output extends AbstractComponent {
  render() {
    return (
      <Segment basic       >
      <Header>Output: {this.state.example.outputName} ({(Math.round((this.state.example.outputSize||1)/1000))} KB)</Header>
     {this.state.example.svg2png ? <img src={this.state.output}/> : <div dangerouslySetInnerHTML={{__html: this.state.output}}></div>}
      </Segment>)
  }
}
