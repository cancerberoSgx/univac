import * as React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'

export class Input extends AbstractComponent {
  render() {
    return (
      <Segment basic       >
        <Header>Input: {this.state.example.name} ({(Math.round((this.state.example.inputSize || 1) / 1000))} KB)</Header>
        {this.state.example.svg2png ? <div dangerouslySetInnerHTML={{ __html: this.state.example.code }}></div> : <img src={this.state.example.code} />}

      </Segment>)
  }
}
