import { Bitmap } from './bitmap'
import { Shape } from './shape'
import { ShapeTypes } from './shapeTypes'

/**
 * Container for info about a shape added to the model.
 */
export interface ShapeResult {
  score: number
  color: number
  shape: Shape
}

/**
 * Model for the optimization/fitting algorithm.
 */
export interface Model {
	/**
	 * Width of the target bitmap.
	 */
  width?: number;
	/**
	 * Height of the target bitmap.
	 */
  height?: number;
	/**
	 * The target bitmap, the bitmap we aim to approximate.
	 */
  target?: Bitmap;
	/**
	 * The current bitmap.
	 */
  current?: Bitmap;
	/**
	 * Buffer bitmap.
	 */
  buffer?: Bitmap;

  // /**
  //  * Creates a new model.
  //  * @param	target	The target bitmap.
  //  * @param	backgroundColor	The starting background color.
  //  */
  // new(target:Bitmap, backgroundColor:Rgba)

	/**
	 * Steps the optimization/fitting algorithm.
	 * @param	shapeType	The shape types to use.
	 * @param	alpha	The alpha of the shape.
	 * @param	n The number of shapes to try.
	 * @param	age The number of mutations to apply to each shape.
	 * @return	An array containing data about the shapes added to the model in this step.
	 */
  step(shapeTypes: Array<ShapeTypes>, alpha: number, n: number, age: number): Array<ShapeResult>

	/**
	 * Adds a shape to the model.
	 * @param	shape	The shape to add.
	 * @param	alpha	The alpha/opacity of the shape.
	 * @return	Data about the shape just added to the model.
	 */
  addShape(shape: Shape, alpha: number): ShapeResult

}
