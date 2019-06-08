
import { resolve, join } from 'path';
import { getPackageJsonFolder } from './util';
import { isNode } from 'misc-utils-of-mine-generic';

const Viz = require('viz.js');
const Worker = require('tiny-worker')

let worker:any
let viz: any

export function terminateLibrary() {
  worker && worker.terminate();
}

export function getLibrary() {
  if(isNode()){
    if(!worker){
      worker = new Worker(resolve(join(getPackageJsonFolder() || '.', 'node_modules','viz.js','full.render.js')));
    }
    if(!viz){
      viz = new Viz({ worker });
    }
    return viz
  }
}
