import { ShapeResult } from './model'

/**
 * Exports the shape data as SVG.
 */
export declare class SvgExporter {

	/**
	* A hook that an SVG exporter should use to augment shape styling produced by the getSvgShapeData method.
	* Note that shape subclasses should include this in shape data - so an SVG exporter implementation must
	* remove/replace this hook string to produce correct SVG files.
	*/
  public static SVG_STYLE_HOOK: string

	/**
	 * Exports the shapes to an SVG image.
	 * @param shapes  The shape data to export.
	 * @param width The width of the SVG image.
	 * @param height  The height of the SVG image.
	 * @return  A string representing the SVG image.
	 */
  public static export(shapes: Array<ShapeResult>, width: number, height: number): string

	/**
	 * Exports an array of shapes to SVG.
	 * @param shapes  The shape data to export.
	 * @return  A string representing the SVG shape data for the shapes.
	 */
  public static exportShapes(shapes: Array<ShapeResult>): string

	/**
	 * Exports a single shape to SVG.
	 * @param shape The shape data to export.
	 * @return  A string representing the SVG shape data for the shape.
	 */
  public static exportShape(shape: ShapeResult): string

  public static getSvgPrelude(): string

  public static getSvgNodeOpen(width: number, height: number): string

  public static getSvgNodeClose(): string

}
