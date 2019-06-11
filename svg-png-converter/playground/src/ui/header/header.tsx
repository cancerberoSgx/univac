import * as React from 'react'
import { Button, Header as H, Icon, Modal, Segment } from 'semantic-ui-react'
import { Examples } from '../body/examples'
import { AbstractComponent } from '../component'
import { About } from './about'
import { LoadImage } from './loadImage'

export class Header extends AbstractComponent {
  render() {
    return (
      <Segment className="mainHeader" fluid >
        <H as="h1" className="header-main">SVG <Icon name="arrows alternate horizontal" /> PNG Converter </H>
        <Examples />
        <Modal trigger={<Button as='a' icon="help" floated="right">About</Button>}>
          <Modal.Header>About</Modal.Header>
          <Modal.Content>
            <About />
          </Modal.Content>
        </Modal>
        <LoadImage />
      </Segment>
    )
  }
}

