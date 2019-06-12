
import { isNode } from 'misc-utils-of-mine-generic'
import { join, resolve } from 'path'
import { getPackageJsonFolder } from './util'
const Viz_ = require('viz.js')
const Viz = typeof Viz_!=='function' ? Viz_.default:Viz_

let worker: any
let viz: any

export function terminateLibrary() {
  worker && worker.terminate()
}

export function getLibrary() {
  if (!worker) {
    if (isNode()&&typeof document==='undefined') {
      const TWorker = require('tiny-worker')
      worker = new TWorker(resolve(join(getPackageJsonFolder() || '.', 'dist', 'src', 'full.render.js')))
    }
    
    else {
      // worker = new Worker(join(getPackageJsonFolder()+'/node_modules/viz.js/full.render.js'))
      worker = new Worker('full.render.js')
      // worker = new Worker('node_modules/viz.js/full.render.js')
      // viz = new Viz.default( {workerURL: 'full.render.js'})
    }
  }
  if (!viz) {
    viz = new Viz({ worker })
  } 
  // viz = new Viz.default( {worker})
  return viz
}
