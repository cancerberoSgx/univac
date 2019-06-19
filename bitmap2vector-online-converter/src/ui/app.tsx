import * as React from 'react'
import { ForkRibbon } from './common/forkRibbon'
import { loadUrl } from './common/uiUtil'
import { AbstractComponent } from './component'
import { Editor } from './editor'
import { Header } from './header'
import { Home } from './home'
import { LoadImage } from './loadImage'
import './styles.css'

export class App extends AbstractComponent {
  componentDidMount() {
    const editorContainer = document.getElementById("editor-container")!
    setTimeout(() => {
      loadUrl()
    }, 100)
  }

  render() {
    return <div className="container">
      <Header />
      {this.state.page === 'home' ? <Home /> : ''}
      {this.state.page === 'loadImage' ? <LoadImage /> : ''}
      {this.state.page === 'editor' ? <Editor /> : ''}
      <ForkRibbon />
    </div>
  }
}
