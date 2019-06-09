import * as React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Examples } from '../body/examples'
import { AbstractComponent } from '../component'
import { About } from './about'

export class Header extends AbstractComponent {
  render() {
    return (
      // <Menu>
      <>
        <Modal trigger={<Button as='a' icon="help" floated="right">About</Button>}>
          <Modal.Header>About</Modal.Header>
          <Modal.Content>
            <About />
          </Modal.Content>
        </Modal>
        <Examples />
      </>

      //   <Dropdown item icon='language' text={`${this.state.example.name} language`}  >
      //     <Dropdown.Menu>
      //       {['a'].map(l => <Dropdown.Item onClick={e => { }}>{l}</Dropdown.Item>)}
      //     </Dropdown.Menu>
      //   </Dropdown>
      //   <Dropdown item icons="file code outline" text={`"${this.state.example.name}" ${this.state.example.name} example`}  >
      //     <Dropdown.Menu>
      //       {['examples'].map(l => <Dropdown.Item onClick={e => { }}>{l}</Dropdown.Item>)}
      //     </Dropdown.Menu>
      //   </Dropdown>


      // <Menu.Menu position="right">

      /* </Menu.Menu>  */
      // </Menu>
    )
  }
}

