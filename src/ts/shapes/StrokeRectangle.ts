import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {Position} from "../Types/position";
import {Rectangle} from "./Rectangle";
import {Canvas} from "../Canvas";

/*
 *
 */
export class StrokeRectangle extends Rectangle {
    private readonly strokeWidth: number;

    constructor(canvas: Canvas, color: Hsl | Rgb, width: number, height: number, strokeWidth: number, position: Position, speed?: number, direction?: number) {
        super(canvas, color, width, height, position, speed, direction)
        this.strokeWidth = strokeWidth;
    }

    /**
     *
     */
    draw() {
        this.ctx.strokeStyle = `${this.color}`;
        this.ctx.lineWidth = this.strokeWidth;
        this.ctx.strokeRect(this.position.x + this.strokeWidth / 2, this.position.y + this.strokeWidth / 2, this.width - this.strokeWidth, this.height - this.strokeWidth);
        return this;
    }
}