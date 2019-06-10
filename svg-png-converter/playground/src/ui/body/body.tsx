import * as React from 'react'
import { Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'
import { Input } from './input'
import { Options } from './options'
import { Output } from './output'

export class Body extends AbstractComponent {
  render() {
    return (
      <Segment basic className="appBody">
        <Options />
        <div style={{ display: 'absolute' }}>
          <Output />
          <Input />
        </div>
      </Segment>)
  }
}
