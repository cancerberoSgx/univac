import { ShapeTypes } from "./shapeTypes";

export interface ImageRunnerOptions {
  /**
   * The types of shapes to use when generating the image.
   */
  shapeTypes: Array<ShapeTypes>

	/**
	 * The opacity of the shapes (0-255).
	 */
  alpha: number

	/**
	 * The number of candidate shapes to try per model step.
	 */
  candidateShapesPerStep: number

	/**
	 * The number of times to mutate each candidate shape.
	 */
  shapeMutationsPerStep: number
}
