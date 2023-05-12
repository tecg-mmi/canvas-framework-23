import {Shape} from "./Shape";
import {ISquare} from "../Types/ISquare";
import {Animatable} from "../Types/Animatable";

export class Square extends Shape implements Animatable{
    protected readonly side: number;

    constructor(square:ISquare) {
        super(square);
        this.side = square.side;
    }

    draw(): void {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(this.position.x, this.position.y, this.side, this.side);
    }

    clear(): void {
        this.ctx.clearRect(this.position.x, this.position.y, this.side, this.side);
    }

    update(): void {
        throw new Error("Method not implemented.");
    }

}