import { ImageRunnerOptions } from './imageRunnerOptions';
import { ShapeResult } from './model';
import { Bitmap } from "./bitmap";
let runner;
export interface ImageRunnerConstructor {
  /**
     * Creates a new runner.
     * @param	inputImage	The input image, the image that the algorithm will optimize for.
     */
  new(inputImage: Bitmap): ImageRunner;
}
interface ImageRunner {
  /**
   * Updates the model once.
   * @return	An array containing data about the shapes just added to the model.
   */
  step(options: ImageRunnerOptions): Array<ShapeResult>;
}
