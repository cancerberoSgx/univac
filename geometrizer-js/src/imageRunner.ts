import { Bitmap } from "./bitmap"
import { ImageRunnerOptions } from './imageRunnerOptions'
import { Model, ShapeResult } from './model'

export interface ImageRunnerConstructor {
  /**
   * Creates a new runner.
   * @param	inputImage	The input image, the image that the algorithm will optimize for.
   */
  new(inputImage: Bitmap): ImageRunner;
}

/**
 * Helper class for creating a set of shapes that approximate a source image.
 */
interface ImageRunner {

  /**
   * The model for the optimization/fitting algorithm.
   */
  model?: Model

  /**
   * Updates the model once.
   * @return	An array containing data about the shapes just added to the model.
   */
  step(options: ImageRunnerOptions): Array<ShapeResult>;

  /**
 * Gets the current bitmap with the shapes drawn on it.
 * @return	The current bitmap.
 */
  getImageData(): Bitmap
}
