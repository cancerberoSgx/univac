import * as React from 'react'
import { Dropdown, Menu, Modal } from 'semantic-ui-react'
import { examples } from '../../examples/examples'
import { AbstractComponent } from '../component'
import { About } from './about'

export class Header extends AbstractComponent {
  render() {
    return <Menu>
      <Dropdown item icon='language' text={`${this.state.example.name} language`}  >
        <Dropdown.Menu>
          {['a'].map(l => <Dropdown.Item onClick={e => {}}>{l}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item icons="file code outline" text={`"${this.state.example.name}" ${this.state.example.name} example`}  >
        <Dropdown.Menu>
          {['examples'] .map(l => <Dropdown.Item onClick={e => {}}>{l}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>


      <Menu.Menu position="right">
        <Modal trigger={<Menu.Item as='a' icon="help">About</Menu.Item>}>
          <Modal.Header>About</Modal.Header>
          <Modal.Content>
            <About />
          </Modal.Content>
        </Modal>
      </Menu.Menu>
    </Menu>
  }
}

