import * as React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { AbstractComponent } from '../component'
import { Ast } from './ast'
import { CursorBreadcrumb } from './cursorBreadcrumb'
import { select } from '../../editor/codeEditor';

export class Body extends AbstractComponent<{ activeIndex: number }> {
  render() {
    // console.log(this.state.error );
    
    return (
      <Segment basic className="appBody">
        <Grid>
          <Grid.Column floated='left' width={8}>
            <CursorBreadcrumb />
            <div id="editor-container" className="editor-container" style={{ height: '100vh', maxHeight: '60vh', margin: 0, padding: 0 }}></div>

            {this.state.error ? 
              <Segment>
              <strong>Error! </strong><br />
              {this.state.error instanceof Error ? <pre>
                {this.state.error + ''}
                {this.state.error.stack || + ''}
              </pre> : <>
              <p><a href="#"onClick={e=>{
                if(this.state.error instanceof Error){return}
                select([{
                  selectionStartColumn: Math.max(0, this.state.error!.column-5), 
                  selectionStartLineNumber: this.state.error!.line, 
                  positionColumn: this.state.error!.column, 
                  positionLineNumber: this.state.error!.line
                }])
              }}>{this.state.error!.msg}</a></p>
              </>}
            </Segment>
            : <></>}

          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Ast />
          </Grid.Column>
        </Grid>
      </Segment>)
  }
}
