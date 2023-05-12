import {Dimension} from "./Types/Dimension";

/**
 * Represents a canvas element and provides methods for manipulating and drawing on the canvas.
 * If the dimensions of the canvas are not defined, the dimensions of the window will be used instead.
 */
export class Canvas {
    private _height: number;
    private _width: number;
    public canvasElement: HTMLCanvasElement;
    public readonly ctx: CanvasRenderingContext2D;
    private readonly autoDimension: boolean;

    /**
     * Sets the height of the canvas.
     * @param value - The new height value in pixels.
     * */
    public set height(value: number) {
        if (value > 0) {
            this._height = value;
            this.canvasElement.height = value;
        }
    }

    /**
     * Sets the width of the canvas.
     * @param value - the new width value in pixels.
     * */
    public set width(value: number) {
        if (value > 0) {
            this._width = value;
            this.canvasElement.width = value;
        }
    }

    /**
     * Retrieves the height of the canvas.
     * @returns the height value in pixels.
     * */
    get height(): number {
        return this._height;
    }

    /**
     * Retrieves the width of the canvas.
     * @returns the width value in pixels.
     * */
    get width(): number {
        return this._width;
    }

    /**
     * Clears the entire canvas.
     * */
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    /**
     * Constructs a new Canvas object. If the dimensions are not defined, the dimensions of the window
     * will be used.
     * @param canvasElement - The canvas element to associate with the Canvas object.
     * @param dimension - An optional parameter specifying the initial dimensions of the canvas.
     * */
    constructor(canvasElement: HTMLCanvasElement, dimension?: Dimension) {
        this.canvasElement = canvasElement;
        if (dimension !== undefined) {
            this.height = dimension.height;
            this.width = dimension.width;
        } else {
            this.autoDimension = true;
            this.width = innerWidth;
            this.height = window.innerHeight;
        }
        this.ctx = this.canvasElement.getContext('2d');

        if (this.autoDimension || this.autoDimension) {
            window.addEventListener('resize', () => {
                if (this.autoDimension) {
                    this.height = innerHeight;
                    this.width = innerWidth;
                }
            });
        }
    }
}