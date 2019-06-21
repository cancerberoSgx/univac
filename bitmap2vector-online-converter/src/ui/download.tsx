import FileSaver from 'file-saver'
import * as React from 'react'
import { AbstractComponent } from './component'
import { Ccc } from '../probes/re';

export class Download extends AbstractComponent {

  render() {
    return (

      <>
        <div className="container">
          {this.state.optimizing ? <div>Optimizing file, please wait...</div> : ''}
          <div className="progress">
          <div className="indeterminate"></div>
      </div>
        
          {!this.state.optimizing ? <div>
            <h4>
            <a href="#" onClick={e => {
              // this.setState({page: 'download'})                  
              var blob = new Blob([this.state.output.content], { type: 'image/svg+xml;charset=utf-8' })
              FileSaver.saveAs(blob, this.state.output.name, )
            }}>
              {this.state.output.name} Ready. Size: {Math.round(this.state.output.size / 1000) + 'KB'}. Click to download.
                </a></h4>

          </div> : ''}

        </div>
      </>
    )
  }
}
