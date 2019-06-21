import test from 'ava'
import { Bitmap, ImageRunner, ShapeJsonExporter, ShapeTypes, SvgExporter } from '../src'

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

test('should export class SvgExporter', async t => {
  t.deepEqual(typeof SvgExporter.prototype.constructor, 'function')
  t.deepEqual(typeof SvgExporter.exportShape, 'function')
  t.deepEqual(typeof SvgExporter.exportShapes, 'function')
  t.deepEqual(typeof SvgExporter.getSvgNodeClose, 'function')
  t.deepEqual(typeof SvgExporter.getSvgNodeOpen, 'function')
  t.deepEqual(typeof SvgExporter.getSvgPrelude, 'function')
  t.deepEqual(typeof SvgExporter.SVG_STYLE_HOOK, 'string')
  t.deepEqual(typeof SvgExporter.export, 'function')
})

test('should export class ShapeJsonExporter', async t => {
  t.deepEqual(typeof ShapeJsonExporter.prototype.constructor, 'function')
  t.deepEqual(typeof ShapeJsonExporter.export, 'function')
  t.deepEqual(typeof ShapeJsonExporter.exportShapes, 'function')
  t.deepEqual(typeof ShapeJsonExporter.exportShape, 'function')
})
