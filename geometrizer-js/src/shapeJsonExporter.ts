import { ShapeResult } from './model'

/**
 * Exports the shape data as JSON.
 */
export declare class ShapeJsonExporter {
	/**
	 * Exports an array of shapes to JSON.
	 * @param	shapes	The shape data to export.
	 * @return	A string representing the JSON shape data for the shapes.
	 */
  public static export(shapes: Array<ShapeResult>): string

	/**
	 * Exports an array of shapes to JSON.
	 * @param	shapes	The shape data to export.
	 * @return	A string representing the JSON shape data for the shapes.
	 */
  public static exportShapes(shapes: Array<ShapeResult>): string

	/**
	 * Exports a shape to JSON
	 * @param	shape	The shape data to export.
	 * @return	A string representing the JSON shape data for the shape.
	 */
  public static exportShape(shape: ShapeResult): string

}
