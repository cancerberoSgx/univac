import * as React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { urlToData, svg2png } from '../../../../dist/src'
import { AbstractComponent } from '../component'
import { Example } from '../../examples/examples';
import { getCode } from '../../app/convert';

export class Input extends AbstractComponent {
  render() {
    const svgInput = getCode(this.state.example).startsWith('data:') ? urlToData(getCode(this.state.example)) : getCode(this.state.example)
    const pngInput = getCode(this.state.example)
    return (
      <Segment basic       >
        <Header>Input: {this.state.example.name} ({(Math.round((this.state.example.inputSize || 1) / 1000))} KB)</Header>
        {this.state.example.svg2png ? <div dangerouslySetInnerHTML={{ __html: svgInput }}></div> : <img src={pngInput} />}
      </Segment>)
  }
}