import {Canvas} from "../Canvas";
import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {Position} from "./Position";
/**
 * The `IShape` interface represents the shape object used in the application. It defines the properties and methods required to create a shape.
 */
export interface IShape {
    /**
     * The canvas on which the shape is drawn.
     * Type `Canvas`
     */
    canvas: Canvas;
    /**
     * The position of the shape on the canvas.
     * Type `Position`
     */
    position: Position;
    /**
     * The speed of the shape.
     * Type `number`
     * @optional
     * @default 1
     */
    speed?: number;
    /**
     * The direction of the shape.
     * Type `number`
     * @optional
     * @default A random value between 0 and 2π
     */
    direction?: number;
    /**
     * The color of the shape.
     * Can be a string or an instance of Hsl or Rgb.
     */
    color: Hsl | Rgb | string;
}