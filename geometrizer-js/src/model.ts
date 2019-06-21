import { Shape } from './shape';

/**
 * Container for info about a shape added to the model.
 * @author Sam Twidale (http://samcodes.co.uk/)
 */
export interface ShapeResult {
	score:number
	color:number
	shape:Shape
}