import * as React from 'react'
import { AbstractComponent } from './component'
import FileSaver from 'file-saver'

export class Download extends AbstractComponent {

  render() {
    return (

      <>
        <div className="container">
          {this.state.optimizing ? <div>Optimizing file, please wait...</div>: ''}
          {!this.state.optimizing ? <div>
            <a href="#" onClick={e => {
                  // this.setState({page: 'download'})                  
                  var blob = new Blob([this.state.output.content], { type: 'image/svg+xml;charset=utf-8' })
                  FileSaver.saveAs(blob, this.state.output.name)
                }}>
                  {this.state.output.name} Ready. Size: {Math.round(this.state.output.size/1000)+'KB'}. Click to download.
                </a>

          </div>: ''}

        </div>
      </>
    )
  }
}
