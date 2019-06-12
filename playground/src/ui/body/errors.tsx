import { asArray, notUndefined } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Segment } from 'semantic-ui-react'
import { isArray } from 'util'
import { ParserError } from '../../app/state'
import { select } from '../../editor/codeEditor'
import { AbstractComponent } from '../component'

export class Errors extends AbstractComponent {

  render() {
    return (
      this.state.error && !(isArray(this.state.error) && !this.state.error.length) ?
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
        : <></>)
  }
}


