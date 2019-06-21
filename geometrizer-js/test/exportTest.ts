import test from 'ava';
import {ImageRunner, ShapeTypes, Bitmap} from '../src'

test('should export class ImageRunner', async t => {
  t.deepEqual(typeof ImageRunner.prototype.constructor, 'function')
  t.deepEqual(typeof ImageRunner.prototype.step, 'function')
})

test('should export enum ShapeTypes', async t => {
  t.deepEqual(ShapeTypes.RECTANGLE, 0)
  t.deepEqual(ShapeTypes.CIRCLE, 5)
})

test('should export class Bitmap', async t => {
  t.deepEqual(typeof Bitmap.prototype.constructor, 'function')
  t.deepEqual(typeof Bitmap.createFromRawBytes, 'function')
})

// test('should export class Bitmap', async t => {
//   t.deepEqual(typeof Bitmap.prototype.constructor, 'function')
//   t.deepEqual(typeof Bitmap.createFromRawBytes, 'function')
// })