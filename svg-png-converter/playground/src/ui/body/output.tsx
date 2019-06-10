import FileSaver from 'file-saver'
import * as React from 'react'
import { Button, Header, Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'

export class Output extends AbstractComponent {
  render() {
    if (this.state.example.svg2png) {

    } else {

    }
    return (
      <Segment basic>

        <Header>Output: 
        {/* <Button.Group>
    <Button labelPosition='left' icon='left chevron' content='Download' onClick={e => {
          var blob = new Blob([this.state.output], { type: 'image/svg+xml;charset=utf-8' })
          FileSaver.saveAs(blob, this.state.example.outputName)
        }}/>
    <Button icon='stop' content='Open In new Tab' />
    <Button labelPosition='right' icon='right chevron' content='See Source' />
  </Button.Group> */}

          <a   href="#" onClick={e => {
          var blob = new Blob([this.state.output], { type: 'image/svg+xml;charset=utf-8' })
          FileSaver.saveAs(blob, this.state.example.outputName)


        }}>{this.state.example.outputName}</a>

        </Header>
        {this.state.example.svg2png ? <img src={this.state.output} /> : <div dangerouslySetInnerHTML={{ __html: this.state.output }}></div>}
      </Segment>)
  }
}
