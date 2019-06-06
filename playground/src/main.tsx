import * as React from 'react'
import { render } from 'react-dom'
import { initMonacoWorkers } from "./editor/initMonacoWorkers"
import { App } from './ui/app'

function main() {
  initMonacoWorkers()
  render(<App />, document.getElementById('main'))
}

main()
