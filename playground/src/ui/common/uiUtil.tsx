import * as React from 'react'
import { Node } from 'univac'
import { getCodeEditorText, setCodeEditorText } from '../../editor/codeEditor'

export function width() {
  return document.body.clientWidth
}

export function height() {
  return window.screen.height
}

export function isDesktop() {
  return width() >= 1023
}

export function getASTNodeAncestors(n: Node): Node[] {
  return n && n.parent ? [n.parent!, ...getASTNodeAncestors(n.parent)] : []
}

export const Space = () => (
  <span style={{ marginRight: '0.5em' }}></span>
)

export function iconForNodeKind(kind = '') {
  kind = kind.toLowerCase()
  if (['method', 'member', 'property', 'constructor'].find(s => kind.includes(s))) {
    return 'cube'
  }
  if (['type', 'interface', 'alias'].find(s => kind.includes(s))) {
    return 'cog'
  }
  if (['import', 'export'].find(s => kind.includes(s))) {
    return 'map'
  }
  if (kind.includes('jsx')) {
    return 'code'
  }
  if (kind.includes('declaration')) {
    return 'puzzle piece'
  }
  else {
    return 'leaf'
  }
}

export function createUrl() {
  const s = {
    code: getCodeEditorText(),
  }
  const b = btoa(JSON.stringify(s))
  window.location.hash = '#state=' + b
}

export function loadUrl() {
  if (window.location.hash.includes('state=')) {
    const d = window.location.hash.split('state=')[1]
    const state = JSON.parse(atob(d))
    setCodeEditorText(state.code)
  } else {

  }
}
