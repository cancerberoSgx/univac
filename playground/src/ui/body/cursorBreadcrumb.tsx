import { notUndefined } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Breadcrumb, BreadcrumbDivider, Popup } from 'semantic-ui-react'
import { highlightNodesInEditor, getCodeEditorText, getEditorTextAtNode } from '../../editor/codeEditor'
import { getASTNodeAncestors } from '../common/uiUtil'
import { AbstractComponent } from '../component'
import { getStore } from '../../app/store';
import { Node } from 'univac';

export class CursorBreadcrumb extends AbstractComponent {
  render() {
    return (
      <Breadcrumb size="small" className="CursorBreadcrumb">
        {[this.state.nodeAtCursor, ...getASTNodeAncestors(this.state.nodeAtCursor)].reverse().filter(notUndefined).map(a => <>
          <BreadcrumbDivider />
          <Breadcrumb.Section link onClick={e => highlightNodesInEditor([a as any])}>
           <Popup trigger={<a href="#">{a.type}</a>}> <pre>{getEditorTextAtNode(a)}</pre></Popup>
          </Breadcrumb.Section>
        </>
        )}
      </Breadcrumb>
    )
  }
}