import { EditorOptions, EditorTracer, Page } from '../../app/state'
import { getStore, StoreEvent, StoreListener } from '../../app/store'

export class UrlStateManager implements StoreListener {

  onStoreEvent(e: StoreEvent) {
    requestAnimationFrame(createUrl)
  }

  init(): any {
    getStore().add(this.onStoreEvent.bind(this))
    setTimeout(() => {
      loadUrl()
    }, 100)
  }

  constructor() {
    this.init()
  }

}

function createUrl() {
  const s = {
    page: getStore().getState().page,
    editorTracer: getStore().getState().editorTracer,
    options: getStore().getState().options
  }
  const b = btoa(JSON.stringify(s))
  window.location.hash = '#state=' + b
}

async function loadUrl(url = window.location.hash) {
  if (window.location.hash.includes('state=')) {
    const d = url.split('state=')[1]
    const s = {
      ...{ page: 'home', editorTracer: 'imagetracer', options: {} }, ...JSON.parse(atob(d)) as {
        page: Page,
        editorTracer: EditorTracer,
        options: EditorOptions
      }
    }
    getStore().setState(s)
  }
  else {
  }
}
