import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {IPosition} from "./IPosition";

export class Square {
    private readonly ctx: CanvasRenderingContext2D;
    private position: IPosition;
    private readonly side: number;
    private readonly color: Hsl | Rgb;

    constructor(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, position: IPosition, side: number) {
        this.ctx = ctx;
        this.position = position;
        this.side = side;
        this.color = color;
    }

    draw() {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(this.position.x, this.position.y, this.side, this.side);
        return this;
    }
}