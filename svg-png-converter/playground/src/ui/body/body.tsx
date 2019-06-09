import * as React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'
import { FormTest } from './formTest'
import { Input } from './input'
import { Output } from './output'

export class Body extends AbstractComponent {
  render() {
    return (
      <Segment basic className="appBody">
        <Grid>
          <Grid.Column floated='left' width={this.state.example.name === 'graph' ? 6 : 8}>
            <FormTest />
          </Grid.Column>
          <Grid.Column floated='right' width={this.state.example.name === 'graph' ? 10 : 8}>
            {/* {this.state.example.svg2png ? <Svg2png /> : <Png2Svg />} */}
            <Input />
            <Output />
          </Grid.Column>
        </Grid>
      </Segment>)
  }
}
