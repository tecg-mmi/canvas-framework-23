import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {StrokeRectangle} from "../shapes/StrokeRectangle";
import {Square} from "../shapes/Square";
import {StrokeSquare} from "../shapes/StrokeSquare";
import {Rectangle} from "../shapes/Rectangle";

let width: number = 100;
const gap: number = 20;
let currentX: number = gap;

function test_drawFillRectangle(ctx: CanvasRenderingContext2D): void {
    const rectangle = new Rectangle(ctx, new Hsl(165, 75, 36), {x: currentX, y: 0}, width, 200);
    rectangle.draw();
}

function test_StrokeRectangle(ctx: CanvasRenderingContext2D): void {
    const strokeRectangle = new StrokeRectangle(ctx, new Rgb(197, 88, 36), {x: currentX, y: 0}, 100, 200, 10)
    strokeRectangle.draw();
    currentX += width + gap;
}

function test_drawFillSquare(ctx: CanvasRenderingContext2D): void {
    const fillSquare = new Square(ctx, new Hsl(165, 75, 36), {x: currentX, y: 0}, 100);
    fillSquare.draw();
    currentX += width + gap;
}

function test_StrokeSquare(ctx: CanvasRenderingContext2D): void {
    const strokeSquare = new StrokeSquare(ctx, new Hsl(197, 88, 36), {x: currentX, y: 0}, 100, 1);
    strokeSquare.draw();
}

export function run(): void {
    const myCanvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = myCanvas.getContext('2d');
    console.log('run test_drawFillRectangle()');
    test_drawFillRectangle(ctx);
    console.log('run test_StrokeRectangle()');
    test_StrokeRectangle(ctx);
    console.log('run test_drawFillSquare()');
    test_drawFillSquare(ctx);
    console.log('run test_StrokeSquare()');
    test_StrokeSquare(ctx);
}