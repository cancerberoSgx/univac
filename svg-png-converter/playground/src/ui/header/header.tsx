import * as React from 'react'
import { Button, Modal, Icon , Header as H, Segment} from 'semantic-ui-react'
import { Examples } from '../body/examples'
import { AbstractComponent } from '../component'
import { About } from './about'

export class Header extends AbstractComponent {
  render() {
    return (
      <Segment className="mainHeader" fluid >
        <H as="h1" className="header-main">SVG <Icon name="arrows alternate horizontal" /> PNG Converter </H>

        <Modal trigger={<Button as='a' icon="help" floated="right">About</Button>}>
          <Modal.Header>About</Modal.Header>
          <Modal.Content>
            <About />
          </Modal.Content>
        </Modal>
        <Examples />
      </Segment>
     
    )
  }
}

