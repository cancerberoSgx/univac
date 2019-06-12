import { asArray, notUndefined } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { isArray } from 'util'
import { ParserError } from '../../app/state'
import { select } from '../../editor/codeEditor'
import { AstGraph } from '../astGraph/astGraph'
import { AbstractComponent } from '../component'
import { Ast } from './ast'
import { CursorBreadcrumb } from './cursorBreadcrumb'
import { TidyTreeView } from './tidyTreeView'

export class Body extends AbstractComponent<{ activeIndex: number }> {
  render() {
    return (
      <Segment basic className="appBody">
        <Grid>
          <Grid.Column floated='left' width={6}>
            <CursorBreadcrumb />
            <div id="editor-container" className="editor-container" style={{ height: '100vh', maxHeight: '50vh', margin: 0, padding: 0 }}></div>

            {this.state.error && !(isArray(this.state.error) && !this.state.error.length) ?
              <Segment>
                <strong>Error! </strong><br />
                {this.state.error instanceof Error ? <pre>
                  {this.state.error + ''}
                  {this.state.error.stack || + ''}
                </pre> :
                  <ul>
                    {
                      asArray(this.state.error!).filter(notUndefined).map(error =>
                        <li><a href="#" onClick={e => {
                          if (this.state.error && this.state.error instanceof Error) { return }
                          const sel = asArray(this.state.error!).filter(notUndefined).map((error: ParserError) => ({
                            selectionStartColumn: Math.max(0, error.column - 5),
                            selectionStartLineNumber: error.line,
                            positionColumn: error.column,
                            positionLineNumber: error.line
                          }))
                          select(sel)
                        }}>{error!.msg}</a></li>
                      )}
                  </ul>
                }
              </Segment>
              : <></>}

          </Grid.Column>
          <Grid.Column floated='right' width={10}>
            <Ast />
          </Grid.Column>
        </Grid>
        <ASTViewerSwitch />
        {/* {this.state.astViewer === 'tidyTreeView' ? <TidyTreeView /> : ''} */}
      </Segment>)
  }
}

export class ASTViewerSwitch extends AbstractComponent {
  render() {
    if (this.state.astViewer === 'graph') {
      return <AstGraph />
    }
    else if (this.state.astViewer === 'tidyTreeView') {
      return <TidyTreeView />
    }
    else {
      return ''
    }
  }
}
