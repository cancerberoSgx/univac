// import { asArray, notUndefined } from 'misc-utils-of-mine-generic'
// import * as React from 'react'
// import { Grid, Segment } from 'semantic-ui-react'
// import { isArray } from 'util'
// import { AbstractComponent } from '../component'

// export class Error extends AbstractComponent {
//   render() {
//     return (
//           <Segment>
//       {this.state.error && !(isArray(this.state.error) && !this.state.error.length) ?
//          <> <strong>Error! </strong><br />
//           {this.state.error instanceof Error ? <pre>
//             {this.state.error + ''}
//             {this.state.error.stack || + ''}
//           </pre> :
//             <ul>
//               {
//                 asArray(this.state.error!).filter(notUndefined).map(error =>
//                   <li><a href="#" onClick={e => {
//                     if (this.state.error && this.state.error instanceof Error) { return }
//                     const sel = asArray(this.state.error!).filter(notUndefined)
//                     .map((error: any) => ({
//                       selectionStartColumn: Math.max(0, error.column - 5),
//                       selectionStartLineNumber: error.line,
//                       positionColumn: error.column,
//                       positionLineNumber: error.line
//                     }))
//                   }}>{error!}</a></li>
//                 )}
//             </ul>
//           }
//           </>
//           : <></>}
//           </Segment>
//     )
//   }
// }
