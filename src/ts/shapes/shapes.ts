import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";

/*
* @ctx : ctx to draw on
* @color : a string for the color of the shape
* ...
* @return : void
* */

export function fillRectangle(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, x: number, y: number, width: number, height: number): void {
    ctx.fillStyle = `${color}`;
    ctx.fillRect(x, y, width, height);
}

export function strokeRectangle(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, x: number, y: number, width: number, height: number, strokeWidth: number = 1): void {
    ctx.strokeStyle = `${color}`;
    ctx.lineWidth = strokeWidth;
    ctx.strokeRect(x + strokeWidth / 2, y + strokeWidth / 2, width - strokeWidth, height - strokeWidth);
}

export function fillSquare(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, x: number, y: number, width: number): void {
    fillRectangle(ctx, color, x, y, width, width);
}

export function strokeSquare(ctx: CanvasRenderingContext2D, color: Hsl | Rgb, x: number, y: number, width: number, strokeWidth: number = 1): void {
    strokeRectangle(ctx, color, x, y, width, width, strokeWidth);
}
