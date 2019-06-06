import { Emitter, objectKeys } from 'misc-utils-of-mine-generic'
import { debug } from './dispatchers'
import { getInitialState, State } from './state'

class Store extends Emitter<void> {
  protected state: State
  constructor() {
    super()
    this.state = getInitialState()
  }
  setState(state: Partial<State>) {
    debug('Store setState', objectKeys(state))
    this.state = { ...this.state, ...state }
    this.emit()
  }
  getState() {
    return this.state
  }
}

let store: Store
export function getStore() {
  if (!store) {
    store = new Store()
  }
  return store
}


