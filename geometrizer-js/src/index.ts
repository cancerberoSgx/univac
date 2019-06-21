import { ImageRunnerConstructor } from './imageRunner';
import { Bitmap as BitmapClass } from './bitmap';
import {SvgExporter as SvgExporterClass} from './svgExporter'
import {ShapeJsonExporter as ShapeJsonExporterClass} from './shapeJsonExporter'

const {geometrize} = require('./geometrize')

export const ImageRunner = geometrize.runner.ImageRunner as ImageRunnerConstructor
export const Bitmap = geometrize.bitmap.Bitmap as typeof BitmapClass 
export const SvgExporter = geometrize.exporter.SvgExporter as typeof SvgExporterClass
export const ShapeJsonExporter = geometrize.exporter.ShapeJsonExporter as typeof ShapeJsonExporterClass

export {ShapeTypes} from './shapeTypes'
export {ImageRunnerOptions} from './imageRunnerOptions'
export {ShapeResult, Model} from './model'