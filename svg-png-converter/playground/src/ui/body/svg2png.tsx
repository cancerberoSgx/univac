import * as React from 'react'
import { Header, Input, Label, Segment, Select } from 'semantic-ui-react'
import { AbstractComponent } from '../component'

export class Svg2png extends AbstractComponent {
  render() {
    return (
      <Segment basic className="appBody">
        <Header>Svg2Png</Header>
        <Label>Format: <Select options={[
          { value: 'png', text: 'png' }, { value: 'jpeg', text: 'jpeg' }
        ]}></Select></Label>

        <Label>Format: <Input type="text" text={this.state.svg2png.format}></Input></Label>
      </Segment>)
  }
}
