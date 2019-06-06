import * as React from 'react'
import { Breadcrumb, BreadcrumbDivider } from 'semantic-ui-react'
import { highlightNodesInEditor } from '../../editor/codeEditor'
import { getASTNodeAncestors } from '../common/uiUtil'
import { AbstractComponent } from '../component'

export class CursorBreadcrumb extends AbstractComponent {
  render() {
    return (
      <Breadcrumb size="small" className="CursorBreadcrumb">
        {this.state.nodeAtCursor && this.state.nodeAtCursor!.type}
        {[this.state.nodeAtCursor, ...getASTNodeAncestors(this.state.nodeAtCursor)].reverse().map(a => <>
          <BreadcrumbDivider />
          <Breadcrumb.Section link onClick={e => highlightNodesInEditor([a as any])}>
            {a.type}
          </Breadcrumb.Section>
        </>
        )}
      </Breadcrumb>
    )
  }
}
