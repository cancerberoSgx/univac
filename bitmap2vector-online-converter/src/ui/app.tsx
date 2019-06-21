import * as React from 'react'
import { ForkRibbon } from './common/forkRibbon'
import { UrlStateManager } from "./common/urlState"
import { AbstractComponent } from './component'
import { Download } from './download'
import { Editor } from './editor'
import { Header } from './header'
import { Home } from './home'
import { LoadImage } from './loadImage'
import './styles.css'


export class App extends AbstractComponent {
  urlState: UrlStateManager | undefined
  componentDidMount() {
    if (!this.urlState) {
      this.urlState = new UrlStateManager()
    }
  }

  render() {
    return <div className="container">
      <Header />
      {this.state.page === 'home' ? <Home /> : ''}
      {this.state.page === 'loadImage' ? <LoadImage /> : ''}
      {this.state.page === 'editor' ? <Editor /> : ''}
      {this.state.page === 'download' ? <Download /> : ''}
      <ForkRibbon />
    </div>
  }
}
