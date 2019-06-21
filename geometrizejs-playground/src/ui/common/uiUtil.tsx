import * as React from 'react'

export function width() {
  return document.body.clientWidth
}

export function height() {
  return window.screen.height
}

export function isDesktop() {
  return width() >= 1023
}

// export function getASTNodeAncestors(n: Node): Node[] {
//   return n && n.parent ? [n.parent!, ...getASTNodeAncestors(n.parent)] : []
// }

export const Space = () => (
  <span style={{ marginRight: '0.5em' }}></span>
)

export function createUrl() {
  // const state = getStore().getState()
  // const s: PersistentState = {
  //   // example: state.example,
  // }
  // const b = btoa(JSON.stringify(s))
  // window.location.hash = '#state=' + b
}

// interface PersistentState {
//   // example: Example,
// }

export function loadUrl() {
  // if (window.location.hash.includes('state=')) {
  //   // const d = window.location.hash.split('state=')[1]
  //   // const state = JSON.parse(atob(d)) as PersistentState
  //   // selectExample(state.example, true)
  // }
}
