import * as React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'

export class Output extends AbstractComponent {
  render() {
    return (
      <Segment basic       >
        <Header>Output: {this.state.example.outputName} ({(Math.round((this.state.example.outputSize || 1) / 1000))} KB)</Header>
        {this.state.example.svg2png ? <img src={this.state.output} /> : <div dangerouslySetInnerHTML={{ __html: this.state.output }}></div>}
      </Segment>)
  }
}
