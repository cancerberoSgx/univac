import * as React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { languages } from 'univac'
import { selectExample } from '../../app/dispatchers'
import { examples } from '../../app/examples'
import { AbstractComponent } from '../component'

export class Header extends AbstractComponent {
  render() {
    return <Menu>
      <Dropdown item text='Languages'  >
        <Dropdown.Menu>
          {languages.map(l => <Dropdown.Item onClick={e => this.setState({ language: l as any })}>{l}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text={this.state.language + ' examples'}>
        <Dropdown.Menu>
          {examples.filter(e => e.language === this.state.language).map(l => <Dropdown.Item onClick={e => selectExample(l)}>{l.name}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  }
}
