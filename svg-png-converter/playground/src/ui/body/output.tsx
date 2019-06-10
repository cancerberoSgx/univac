import * as React from 'react'
import { Header, Segment, Button } from 'semantic-ui-react'
import { AbstractComponent } from '../component'
import FileSaver from 'file-saver'

export class Output extends AbstractComponent {
  render() {
    if(this.state.example.svg2png){

    }else {
      
    }
    return (
      <Segment basic>
        
        <Header>Output: <Button as="a" href="#" onClick={e=>{
          var blob = new Blob([this.state.output], {type: 'image/svg+xml;charset=utf-8'});
          FileSaver.saveAs(blob, this.state.example.outputName);

          
        }}>{this.state.example.outputName}</Button>
        
        {/* <a target="_blank" download={this.state.example.outputName} href={dataToUrl(this.state.output, 'image/svg+xml')}></a>  */}
        ({(Math.round((this.state.example.outputSize || 1) / 1000))} KB)
        </Header>
        {this.state.example.svg2png ? <img src={this.state.output} /> : <div dangerouslySetInnerHTML={{ __html: this.state.output }}></div>}
      </Segment>)
  }
}
