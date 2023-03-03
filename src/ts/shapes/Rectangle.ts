import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";

export class Rectangle {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly x: number;
    private readonly y: number;
    private readonly width: number;
    private readonly height: number;
    private readonly color: Hsl | Rgb;

    constructor(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, x: number, y: number, width: number, height: number) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color
    }

    draw() {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}