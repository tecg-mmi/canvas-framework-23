import {Position} from "../Types/position";
import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {Canvas} from "../Canvas";
import {IShape} from "../Types/IShape";

/**
 * The Shape class is an abstract class that serves as the base class for all shapes in the application, it cannot be used on its own, it is only used to extend other classes. It provides properties and methods common to all shapes.
 */
export abstract class Shape {
    /**
     * The canvas rendering context used to draw the shape.
     * @readonly
     */
    protected readonly ctx: CanvasRenderingContext2D;
    /**
     * The position of the shape on the canvas.
     */
    position: Position;
    /**
     * The speed of the shape.
     * @readonly
     */
    protected readonly speed: number;
    /**
     * The direction of the shape.
     */
    protected direction: number;
    /**
     * The color of the shape.
     */
    color: Hsl | Rgb | string;
    /**
     * The canvas on which the shape is drawn.
     */
    protected canvas: Canvas;

    /**
     *
     * @param shape - A constructor method that initializes a Shape object with the provided IShape object.
     * @throws {EvalError} The canvas must be defined in the shape object.
     */
    constructor(shape: IShape) {
        if (shape.canvas === undefined) {
            throw EvalError("The canvas must be defined");
        }
        this.canvas = shape.canvas;
        this.ctx = this.canvas.ctx;
        this.position = shape.position.y && shape.position.x ? shape.position : {x: 0, y: 0};
        this.color = shape.color as Rgb !== undefined || shape.color as Hsl !== undefined ? shape.color : new Rgb(250, 0, 0);
        this.speed = shape.speed != undefined && shape.speed > 0 ? shape.speed : 1;
        this.direction = shape.direction > 0 ? shape.direction : Math.random() * Math.PI * 2;
    }
}