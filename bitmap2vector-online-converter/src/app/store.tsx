import { Emitter } from 'misc-utils-of-mine-generic'
import { State } from './state'

export interface StoreEvent { oldState: State, partial: Partial<State>, newState: State }
export type StoreListener = {onStoreEvent(e: StoreEvent):void}
class Store extends Emitter<StoreEvent> {

  constructor(protected state: State) {
    super()
  }

  setState(state: Partial<State>) {
    const oldState = this.state
    this.state = { ...this.state, ...state }
    this.emit({ oldState, partial: state, newState: this.state })
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
