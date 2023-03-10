import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {IPosition} from "./IPosition";

export class Rectangle {
    private readonly ctx: CanvasRenderingContext2D;
    private position: IPosition;
    private readonly width: number;
    private readonly height: number;
    private readonly color: Hsl | Rgb;

    constructor(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, position: IPosition, width: number, height: number) {
        this.ctx = ctx;
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color
    }

    draw() {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        return this;
    }
}