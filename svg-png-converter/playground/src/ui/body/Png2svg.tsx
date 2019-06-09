import { asArray, notUndefined } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Grid, Segment, Input, Label, Header } from 'semantic-ui-react'
import { isArray } from 'util'
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
