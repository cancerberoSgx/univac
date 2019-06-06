import * as React from 'react'
import { Dropdown, Menu, Modal } from 'semantic-ui-react'
import { languages } from 'univac'
import { selectExample, selectLanguage } from '../../app/dispatchers'
import { examples } from '../../app/examples'
import { AbstractComponent } from '../component'
import { About } from './about'

export class Header extends AbstractComponent {
  render() {
    return <Menu>
      <Dropdown item text={`${this.state.language} language`}  >
        <Dropdown.Menu>
          {languages.map(l => <Dropdown.Item onClick={e => selectLanguage(l as any)}>{l}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text={`"${this.state.example.name}" ${this.state.language} example`}  >
        <Dropdown.Menu>
          {examples.filter(e => e.language === this.state.language).map(l => <Dropdown.Item onClick={e => selectExample(l)}>{l.name}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <Modal trigger={<Menu.Item as='a'>About</Menu.Item>}>
        <Modal.Header>About</Modal.Header>
        <Modal.Content>
          <About />
        </Modal.Content>
      </Modal>
    </Menu>
  }
}

