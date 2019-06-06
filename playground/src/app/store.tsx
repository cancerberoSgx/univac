import { Emitter } from 'misc-utils-of-mine-generic'
import { State } from './state'

class Store extends Emitter<void> {

  constructor(protected state: State) {
    super()
  }

  setState(state: Partial<State>) {
    this.state = { ...this.state, ...state }
    this.emit()
  }

  getState() {
    return this.state
  }
}

let store: Store
export function getStore() {
  return store
}

export function _setStore(s: State) {
  store = new Store(s)
}
