// export default require('./geometrize') as Geometrize

const {geometrize} = require('./geometrize')

export const shape = geometrize.shape as Shape
export const runner = geometrize.runner as Runner

interface Geometrize {
  shape: Shape
  exporter: Exporter
  bitmap: {Bitmap: {}}
  runner: Runner
}

interface Runner {ImageRunner: typeof ImageRunner}
declare class ImageRunner {}
interface Shape{ShapeType: ShapeType}
interface Exporter {ShapeJsonExporter: ShapeJsonExporter, SvgExporter: SvgExporter}
interface SvgExporter {}
interface ShapeJsonExporter {}
type ShapeType = {}