import * as React from 'react'
import { Dropdown, Menu, Modal } from 'semantic-ui-react'
import { languages } from 'univac'
import { selectExample, selectLanguage } from '../../app/dispatchers'
import { examples } from '../../app/examples'
import { astViewers } from '../../app/state'
import { AbstractComponent } from '../component'
import { About } from './about'

export class Header extends AbstractComponent {
  render() {
    return <Menu>
      <Dropdown item icon='language' text={`${this.state.language} language`}  >
        <Dropdown.Menu>
          {languages.map(l => <Dropdown.Item onClick={e => selectLanguage(l as any)}>{l}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item icons="file code outline" text={`"${this.state.example.name}" ${this.state.language} example`}  >
        <Dropdown.Menu>
          {examples.filter(e => e.language === this.state.language).map(l => <Dropdown.Item onClick={e => selectExample(l)}>{l.name}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>


      <Menu.Menu position="right">
        {/* <Menu.Item icon="th icon">
          <label>{this.state.astViewer === 'evenParent' ? 'AST Default View' : 'AST Graph View'}
            <input type="checkbox" checked={this.state.astViewer === 'evenParent'} onChange={e => {
              this.setState({ astViewer: e.currentTarget.checked ? 'evenParent' : 'default' })
            }}></input></label>
        </Menu.Item> */}


        <Menu.Item icon="th icon">
          <Dropdown
            button
            className='icon'
            floating
            labeled
            icon='world'
            options={astViewers.map(s => ({ key: s, text: s, value: s }))}
            search
            text='AST View'
            onChange={(e, p) => {
              p.value && this.setState({ astViewer: p.value as any })
            }}
          />
        </Menu.Item>
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

