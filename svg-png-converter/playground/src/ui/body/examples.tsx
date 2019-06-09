import * as React from 'react'
import { Header, Select } from 'semantic-ui-react'
import { convert } from '../../app/dispatchers'
import { examples } from '../../examples/examples'
import { AbstractComponent } from '../component'

export class Examples extends AbstractComponent {
  render() {
    return (
      <>
        <Header>Explore available <strong>Examples:</strong></Header>
        <Select search
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
      </>)
  }
}
