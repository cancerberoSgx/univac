import { asArray, notUndefined } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { isArray } from 'util'
import { AbstractComponent } from '../component'
import { Error } from './error';
import { examples } from '../../app/examples';
import { Examples } from './examples';
import { Svg2png } from './svg2png';
import { Png2Svg } from './Png2svg';
import { Output } from './output';
import { Input } from './input';

export class Body extends AbstractComponent {
  render() {
    return (
      <Segment basic className="appBody">
        <Grid>
          <Grid.Column floated='left' width={this.state.example.name==='graph' ? 6 : 8}>   
          holas       
          <Examples/>
           <Error/>
          </Grid.Column>
          <Grid.Column floated='right' width={this.state.example.name==='graph' ? 10 : 8}>
          {this.state.example.svg2png ? <Svg2png/> : <Png2Svg/>}
          <Input/>
                <Output/>
          </Grid.Column>
        </Grid>
      </Segment>)
  }
}
