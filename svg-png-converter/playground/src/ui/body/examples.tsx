import * as React from 'react'
import { Header, Segment, Select } from 'semantic-ui-react'
import { convert } from '../../app/convert'
import { examples } from '../../examples/examples'
import { AbstractComponent } from '../component'

export class Examples extends AbstractComponent {
  render() {
    return (
      <>
        <Segment basic floated="right" className="examplesContainer">
          <Header as="h3" className="header-examples">
            Examples:
          </Header>
          <Select className="select-examples" search
          text="Examples"
            selectedLabel={this.state.example.name} 
            value={this.state.example.name}
            onChange={async (e, props) => {
              const example = examples.find(e => e.name === props.value)
              if (example) {
                this.setState({ example, output: await convert(example) })
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
