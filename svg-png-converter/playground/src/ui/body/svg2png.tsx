import { asArray, notUndefined } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Grid, Segment, Input, Label, Header, Select } from 'semantic-ui-react'
import { isArray } from 'util'
import { AbstractComponent } from '../component'

export class Svg2png extends AbstractComponent {
  render() {
    return (
      <Segment basic className="appBody">
      <Header>Svg2Png</Header>
      <Label>Format: <Select options={[
        {value: 'png', label: 'png'},{value: 'jpeg', label: 'jpeg'} 
      ]}></Select></Label>   

      <Label>Format: <Input type="text" text={this.state.svg2png.format}></Input></Label> 
      </Segment>)
  }
}
