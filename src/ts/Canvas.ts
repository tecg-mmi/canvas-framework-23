export class Canvas {
    private _height: number;
    private _width: number;
    public canvasElement: HTMLCanvasElement;
    public readonly ctx: CanvasRenderingContext2D;
    private readonly autoHeight: boolean;
    private readonly autoWidth: boolean;

    public set height(value: number) {
        if (value > 0) {
            this._height = value;
            this.canvasElement.height = value;
        }
    }

    public set width(value: number) {
        if (value > 0) {
            this._width = value;
            this.canvasElement.width = value;
        }
    }


    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    constructor(canvasElement: HTMLCanvasElement, height?: number, width?: number) {
        this.canvasElement = canvasElement;
        if (height !== undefined) {
            this.height = height;
        } else {
            this.autoHeight = true;
            this.height = window.innerHeight;
        }

        if (width !== undefined) {
            this.width = width;
        } else {
            this.autoWidth = true;
            this.width = innerWidth;
        }
        this.ctx = this.canvasElement.getContext('2d');

        if (this.autoHeight || this.autoHeight) {
            window.addEventListener('resize', () => {
                if (this.autoHeight) {
                    this.height = innerHeight;
                }
                if (this.autoWidth) {
                    this.width = innerWidth;
                }
            })
        }
    }

}