import 'babel-polyfill'
import * as React from 'react'
import { render } from 'react-dom'
import { getInitialState } from './app/state'
import { _setStore } from './app/store'
import { App } from './ui/app'

async function main() {
  const s = await getInitialState()
  _setStore(s)
  render(<App />, document.getElementById('main'))
}

main()
