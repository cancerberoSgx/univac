import * as React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'
import { Ast } from './ast'
import { ASTViewerSwitch } from './astViewerSwitch'
import { CursorBreadcrumb } from './cursorBreadcrumb'
import { Errors } from './errors'

export class Body extends AbstractComponent<{ activeIndex: number }> {

  render() {
    return (
      <Segment basic className="appBody">
        <Grid>
          <Grid.Column floated='left' width={8}>
            <CursorBreadcrumb />
            <div id="editor-container" className="editor-container" style={{ height: '100vh', maxHeight: '40vh', width: '100%', margin: 0, padding: 0 }}></div>
            <Errors />
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Ast />
          </Grid.Column>
        </Grid>
        <ASTViewerSwitch />
      </Segment>)
  }
}


