import * as React from 'react'
import { Button, Checkbox, List } from 'semantic-ui-react'
import { Node } from 'univac'
import { highlightNodesInEditor } from '../../editor/codeEditor'
import { Space } from '../common/uiUtil'
import { AbstractComponent } from '../component'

export class Ast extends AbstractComponent {
  // componentWillMount() {
  //   this.forceUpdate()
  // }

  // shouldComponentUpdate(nextProps: any, nextState: Readonly<State>, nextContext: any) {
  //   return nextState.currentEditorAst !== this.state.currentEditorAst && this.state.astAutoUpdate ||
  //     nextState.astAutoUpdate !== this.state.astAutoUpdate ||
  //     nextState.getChildren !== this.state.getChildren ||
  //     nextState.astShowText !== this.state.astShowText ||
  //     nextState.currentEditorAstCollapsedNodes.length !== this.state.currentEditorAstCollapsedNodes.length
  // }

  render() {
    let node = this.state.ast
    return <>
      <Checkbox defaultChecked={this.state.astAutoUpdate} label="Auto Update" onChange={(e, props) => {
        this.setState({ astAutoUpdate: !!props.checked })
      }}></Checkbox>
      <Space />
      {this.state.astAutoUpdate ? '' : <Button size="small" onClick={e => this.forceUpdate()}>Update</Button>}
      <List className="astTree">
        {this.renderNode(node)}
      </List>
    </>
  }

  renderNode(node: Node) {
    const children = node.children
    const expanded = children.length && this.state.expandedNodes.includes(node)
    return (<List.Item onClick={e => {
      e.stopPropagation()
      highlightNodesInEditor([node])
    }}>

      <List.Content>
        <List.Header as="a">
          <span onClick={e => {
            e.stopPropagation()
            if (expanded) {
              this.setState({ expandedNodes: this.state.expandedNodes.filter(n => n !== node) })
            } else {
              this.setState({ expandedNodes: [...this.state.expandedNodes, node] })
            }
          }}>
            <List.Icon name={expanded ? 'minus' : 'plus'} />
          </span>
          {node.type}
        </List.Header>
        {expanded ?
          <List.List>{children.map(c => this.renderNode(c))}</List.List>
          : <></>
        }
      </List.Content>
    </List.Item>)
  }
}
