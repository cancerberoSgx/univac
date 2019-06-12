import * as React from 'react'
import { render } from 'react-dom'
import { getInitialState } from './app/state'
import { _setStore } from './app/store'
import { initMonacoWorkers } from "./editor/initMonacoWorkers"
import { App } from './ui/app'

async function main() {
  initMonacoWorkers()
  const s = await getInitialState()
  _setStore(s)
  render(<App />, document.getElementById('main'))
}

main()
