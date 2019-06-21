import test from 'ava';
import {shape, runner} from '../src'

test('should export class runner.ImageRunner', async t => {
  t.true(typeof runner.ImageRunner.prototype.constructor==='function')
  // t.notThrows(()=>new runner.ImageRunner())
  console.log(shape);
  
})
// test('should export shape.ShapeTypes', async t => {
  // t.true(typeof runner.ImageRunner.prototype.constructor==='function')
// })