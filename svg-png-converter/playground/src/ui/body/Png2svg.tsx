import * as React from 'react'
import { Header, Input, Label, Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'

export class Png2Svg extends AbstractComponent {
  render() {
    return (
      <Segment basic className="appBody">
        <Header>Png2Svg</Header>
        <Input text={this.state.svg2png.format}><Label>Format</Label></Input>
      </Segment>)
  }
}
