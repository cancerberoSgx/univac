import * as React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { urlToData } from '../../../../dist/src'
import { AbstractComponent } from '../component'

export class Input extends AbstractComponent {
  render() {
    const svgInput = this.state.example.code.startsWith('data:') ? urlToData(this.state.example.code) : this.state.example.code
    const pngInput = this.state.example.code
    return (
      <Segment basic       >
        <Header>Input: {this.state.example.name} ({(Math.round((this.state.example.inputSize || 1) / 1000))} KB)</Header>
        {this.state.example.svg2png ? <div dangerouslySetInnerHTML={{ __html: svgInput }}></div> : <img src={pngInput} />}
      </Segment>)
  }
}
