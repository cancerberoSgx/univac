import * as React from 'react'
import { Dropdown, Menu, Modal } from 'semantic-ui-react'
// import { languages } from 'univac'
// import { selectExample, selectLanguage } from '../../app/dispatchers'
// import { examples } from '../../app/examples'
// import { astViewers } from '../../app/state'
import { createUrl } from '../common/uiUtil'
import { AbstractComponent } from '../component'
import { About } from './about'

export class Header extends AbstractComponent {
  render() {
    return <Menu>
      <Dropdown item icon="box" className="languageMenu" text={`${'this.state.language'} language`}  >

        <Dropdown.Menu>

          {['bar'].map(l => <Dropdown.Item onClick={e => { }}>{l}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item icon="file code outline" className="languageMenu" text={`"${'this.state.example.name'}" example`}  >
        <Dropdown.Menu>
          {[{ language: 'examples', name: 'foo' }].map(l => <Dropdown.Item onClick={e => { }}>{l.name}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>


      <Menu.Menu position="right">

        {/* <Menu.Menu vertical  >
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item
              // name='search'
              // active={activeItem === 'search'}
              // onClick={this.handleItemClick}
            >
              Search
            </Menu.Item>
            <Menu.Item name='add' 
            // active={activeItem === 'add'} onClick={this.handleItemClick}
            >
              Add
            </Menu.Item>
            <Menu.Item name='about' 
            // active={activeItem === 'about'} onClick={this.handleItemClick}
            >
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item name='browse' 
        // active={activeItem === 'browse'} onClick={this.handleItemClick}
        >
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='messages'
          // active={activeItem === 'messages'}
          // onClick={this.handleItemClick}
        >
          Messages
        </Menu.Item> */}


        {/* </Menu.Menu> */}


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
            icon='grid layout'
            options={['astViewers'].map(s => ({ key: s, text: s, value: s }))}
            search
            text={'this.state.astViewer'}
            onChange={(e, p) => {
              p.value && this.setState({})
            }}
          />
        </Menu.Item>
        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Create Url' onClick={createUrl} />
            <Modal trigger={<Dropdown.Item icon="help circle" text="About" />}>
              <Modal.Header>About</Modal.Header>
              <Modal.Content>
                <About />
              </Modal.Content>
            </Modal>

            {/* <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' /> */}
          </Dropdown.Menu>
        </Dropdown>

      </Menu.Menu>


    </Menu>
  }
}

