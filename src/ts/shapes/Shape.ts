import {Position} from "../Types/position";
import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {Canvas} from "../Canvas";

export abstract class Shape {
    protected readonly ctx: CanvasRenderingContext2D;
    protected position: Position;
    protected readonly speed: number;
    protected direction: number;
    color: Hsl | Rgb;
    protected canvas: Canvas;


    constructor(canvas: Canvas, position: Position, speed: number, direction: number, color: Hsl | Rgb) {
        if (canvas === undefined) {
            throw EvalError("The canvas must be defined");
        }
        this.canvas = canvas;
        this.ctx = this.canvas.ctx;
        this.position = position.y && position.x ? position : {x: 0, y: 0};
        this.color = color as Rgb !== undefined || color as Hsl !== undefined ? color : new Rgb(250, 0, 0);
        this.speed = speed > 0 ? speed : 1;
        this.direction = direction > 0 ? direction : Math.random() * Math.PI * 2;
    }
}