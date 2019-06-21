import { Bitmap as BitmapClass } from './bitmap'
import { ImageRunnerConstructor } from './imageRunner'
import { ShapeJsonExporter as ShapeJsonExporterClass } from './shapeJsonExporter'
import { SvgExporter as SvgExporterClass } from './svgExporter'

const { geometrize } = require('./geometrize')

export const ImageRunner = geometrize.runner.ImageRunner as ImageRunnerConstructor
export const Bitmap = geometrize.bitmap.Bitmap as typeof BitmapClass
export const SvgExporter = geometrize.exporter.SvgExporter as typeof SvgExporterClass
export const ShapeJsonExporter = geometrize.exporter.ShapeJsonExporter as typeof ShapeJsonExporterClass

export { ImageRunnerOptions } from './imageRunnerOptions'
export { Model, ShapeResult } from './model'
export { ShapeTypes } from './shapeTypes'
