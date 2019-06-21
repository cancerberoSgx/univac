import { ImageRunnerConstructor } from './runner';
import { Bitmap as BitmapClass } from './bitmap';

const {geometrize} = require('./geometrize')

export const ImageRunner = geometrize.runner.ImageRunner as ImageRunnerConstructor
export const Bitmap = geometrize.bitmap.Bitmap as typeof BitmapClass 

export {ShapeTypes} from './shapeTypes'
export {ImageRunnerOptions} from './imageRunnerOptions'
// export {Bitmap} from './bitmap'




// export const shape = geometrize.shape as Shape
// export default require('./geometrize') as Geometrize
// interface Geometrize {
//   shape: Shape
//   exporter: Exporter
//   bitmap: {Bitmap: {}}
//   runner: Runner
// }

// interface Runner {ImageRunner: typeof ImageRunner}
// declare class ImageRunner {}
// interface Shape{ShapeType: ShapeType}
// interface Exporter {ShapeJsonExporter: ShapeJsonExporter, SvgExporter: SvgExporter}
// interface SvgExporter {}
// interface ShapeJsonExporter {}
// type ShapeType = {}