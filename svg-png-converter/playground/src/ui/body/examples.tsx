import * as React from 'react'
import { Header, Select, Icon, Segment } from 'semantic-ui-react'
import { convert } from '../../app/dispatchers'
import { examples } from '../../examples/examples'
import { AbstractComponent } from '../component'

export class Examples extends AbstractComponent {
  render() {
    return (
      <>
        <Header  as="h1" className="header-main">SVG <Icon name="arrows alternate horizontal"/> PNG Converter </Header>
        <Segment basic  floated="right">
        <Header as="h3"  className="header-examples">
        Examples:
        </Header>
        <Select className="select-examples" search
          selectedLabel={this.state.example.name} value={this.state.example.name}
        
          onChange={async (e, props) => {
            const example = examples.find(e => e.name === props.value)
            if (example) {
              const output = await convert(example)
              this.setState({ example, output })
            }
          }}
          options={examples.map(e => ({
            value: e.name,
            text: `${e.name} (${e.svg2png ? 'svg2png' : 'png2svg'})`
          }))}
        >
        </Select>
        </Segment>
      </>)
  }
}
