import { TODO } from './util'

/**
 * Helper class for working with bitmap data.
 */
export declare class Bitmap {

	/**
	 * The width of the bitmap.
	 */
  width: number

	/**
	 * The height of the bitmap.
	 */
  height: number

	/**
	 * Creates a new bitmap, filled with the given color.
	 * @param	w		The width of the bitmap.
	 * @param	h		The height of the bitmap.
	 * @param	color	The starting background color of the bitmap.
	 * @return	The new bitmap.
	 */
  static create(w: number, h: number, color: Rgba): Bitmap

	/**
	 * Creates a new bitmap from the supplied byte data.
	 * @param	w		The width of the bitmap.
	 * @param	h		The height of the bitmap.
	 * @param	bytes	The byte data to fill the bitmap with, must be width * height * depth long.
	 * @return	The new bitmap.
	 */
  static createFromBytes(w: number, h: number, bytes: Bytes): Bitmap
  /**
	 * Creates a new bitmap from the supplied native raw byte array. Useful for target language consumers
   * that don't have access to Bytes haxe standar library class. 
	 * @param	w		The width of the bitmap.
	 * @param	h		The height of the bitmap.
	 * @param	bytes	The byte data to fill the bitmap with, must be width * height * depth long.
	 * @return	The new bitmap.
	 */
  static createFromByteArray(w: number, h: number, bytes: number[] | Buffer): Bitmap

	/**
	 * Gets a pixel at the given coordinate.
	 * @param	x	The x-coordinate.
	 * @param	y	The y-coordinate.
	 * @return	The pixel color value.
	 */
  getPixel(x: number, y: number): Rgba

	/**
	 * Sets a pixel at the given coordinate.
	 * @param	x	The x-coordinate.
	 * @param	y	The y-coordinate.
	 * @param	color	The color value to set at the given coordinate.
	 */
  setPixel(x: number, y: number, color: Rgba): void

	/**
	 * Makes a deep copy of the bitmap data.
	 * @return	The deep copy of the bitmap data.
	 */
  clone(): Bitmap

	/**
	 * Fills the bitmap with the given color.
	 * @param	color The color to fill the bitmap with.
	 */
  fill(color: Rgba): void

	/**
	 * Gets the raw bitmap data bytes.
	 * @return	The bitmap data.
	 */
  getBytes(): Bytes

}

export type Bytes = TODO
export type Rgba = TODO
