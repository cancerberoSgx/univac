import * as React from 'react'
import { Button, Checkbox, List, Popup } from 'semantic-ui-react'
import { Node, printNodeText } from 'univac'
import { State } from '../../app/state'
import { getEditorTextAtNode, highlightNodesInEditor } from '../../editor/codeEditor'
import { Space } from '../common/uiUtil'
import { AbstractComponent } from '../component'

export class Ast extends AbstractComponent {

  shouldComponentUpdate(nextProps: any, nextState: Readonly<State>, nextContext: any) {
    return nextState.ast !== this.state.ast && this.state.astAutoUpdate ||
      nextState.astAutoUpdate !== this.state.astAutoUpdate ||
      nextState.expandNegated !== this.state.expandNegated ||
      nextState.astShowText !== this.state.astShowText ||
      nextState.example.name !== this.state.example.name ||
      nextState.expandedNodes.length !== this.state.expandedNodes.length
  }

  render() {
    let node = this.state.ast
    return <>
      <Checkbox defaultChecked={this.state.astAutoUpdate} label="Auto Update" onChange={(e, props) => {
        this.setState({ astAutoUpdate: !!props.checked })
      }}></Checkbox>
      <Space />
      {this.state.astAutoUpdate ? '' : <Button size="small" onClick={e => this.forceUpdate()}>Update</Button>}
      <Checkbox defaultChecked={this.state.expandNegated} label={this.state.expandNegated ? 'Collapse' : 'Expand'} onChange={(e, props) => {
        this.setState({ expandNegated: !!props.checked })
      }}></Checkbox>
      <Checkbox defaultChecked={this.state.astShowText} label={`${this.state.astShowText ? 'Hide' : 'Show'} Text`} onChange={(e, props) => {
        this.setState({ astShowText: !!props.checked })
      }}></Checkbox>
      <List className="astTree">
        {this.renderNode(node)}
      </List>
    </>
  }

  renderNode(node?: Node) {
    if (!node) {
      return
    }
    const children = node.children
    let expanded = children.length && this.state.expandedNodes.includes(node)
    expanded = this.state.expandNegated ? !expanded : expanded
    return (<List.Item onClick={e => {
      e.stopPropagation()
      highlightNodesInEditor([node])
    }}>
      <List.Content>
        <List.Header as="a">
          <span onClick={e => {
            e.stopPropagation()
            if (expanded && !this.state.expandNegated || !expanded && this.state.expandNegated) {
              this.setState({ expandedNodes: this.state.expandedNodes.filter(n => n !== node) })
            } else {
              this.setState({ expandedNodes: [...this.state.expandedNodes, node] })
            }
          }}>
            <List.Icon name={expanded ? 'minus' : 'plus'} />
          </span>
          <Popup trigger={<span>{node.type}</span>}><pre>{getEditorTextAtNode(node)}</pre></Popup>
        </List.Header>
        <List.Description>
          {this.state.astShowText ?
            <><Space />"<code>{printNodeText(node.text || '', 20, false)}</code>"</>
            : <></>}
        </List.Description>
        {expanded ?
          <List.List>{children.map(c => this.renderNode(c))}</List.List>
          : <></>
        }
      </List.Content>
    </List.Item>)
  }
}
