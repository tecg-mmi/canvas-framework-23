import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {IPosition} from "./IPosition";

export class StrokeSquare {
    private readonly ctx: CanvasRenderingContext2D;
    private position: IPosition;
    private readonly side: number;
    private readonly strokeWidth: number;
    private readonly color: Hsl | Rgb;

    constructor(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, position: IPosition, side: number, strokeWidth: number = 1) {
        this.ctx = ctx;
        this.position = position;
        this.side = side;
        this.strokeWidth = strokeWidth;
        this.color = color;
    }

    draw() {
        this.ctx.strokeStyle = `${this.color}`;
        this.ctx.lineWidth = this.strokeWidth;
        this.ctx.strokeRect(this.position.x + this.strokeWidth / 2, this.position.y + this.strokeWidth / 2, this.side - this.strokeWidth, this.side - this.strokeWidth);
        return this;
    }
}