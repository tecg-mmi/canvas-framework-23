import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {IPosition} from "./IPosition";

/*
 *
 */
export class StrokeRectangle {
    private readonly ctx: CanvasRenderingContext2D;

    private position: IPosition;
    private readonly width: number;
    private readonly height: number;
    private readonly strokeWidth: number;
    private readonly color: Hsl | Rgb;

    constructor(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, position: IPosition, width: number, height: number, strokeWidth: number = 1) {
        this.ctx = ctx;
        this.position = position;
        this.strokeWidth = strokeWidth;
        this.width = width;
        this.height = height;
        this.color = color
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