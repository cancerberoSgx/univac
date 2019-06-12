import * as React from 'react'
import { AstGraph } from '../astGraph/astGraph'
import { AbstractComponent } from '../component'
import { GraphvizTreeViews } from './graphvizTreeViews'
import { TidyTreeView } from './tidyTreeView'

export class ASTViewerSwitch extends AbstractComponent {
  render() {
    if (!this.state.astViewer || this.state.astViewer === 'evenParent') {
      return <AstGraph />
    }
    else if (this.state.astViewer === 'tidyTreeView') {
      return <TidyTreeView />
    }
    else if (this.state.astViewer === 'dot') {
      return <GraphvizTreeViews engine="dot" />
    }
    else if (this.state.astViewer === 'patchwork') {
      return <GraphvizTreeViews engine="patchwork" />
    }
    else if (this.state.astViewer === 'fdp') {
      return <GraphvizTreeViews engine="fdp" />
    }
    else if (this.state.astViewer === 'neato') {
      return <GraphvizTreeViews engine="neato" />
    }
    else {
      return ''
    }
  }
}
