import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {Position} from "../Types/position";
import {Shape} from "./Shape";
import {Canvas} from "../Canvas";

export class Square extends Shape {
    protected readonly side: number;

    constructor(canvas: Canvas, color: Hsl | Rgb, side: number, position: Position, speed?: number, direction?: number) {
        super(canvas, position, speed, direction, color);
        this.side = side;
    }

    draw() {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(this.position.x, this.position.y, this.side, this.side);
        return this;
    }
}