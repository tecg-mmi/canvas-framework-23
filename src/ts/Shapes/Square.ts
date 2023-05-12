import {Shape} from "./Shape";
import {ISquare} from "../Types/ISquare";
import {Animatable} from "../Types/Animatable";

/*
* The class Square extends the Shape class and implements the Animatable interface.
* This class allows you to draw, clear and update a square shape on the canvas.
* */
export class Square extends Shape implements Animatable {
    /*
    * @readonly side - represents the length of a side of the square.
    * */
    protected readonly side: number;

    /*
    * Creates a new square object
    * @param square - An object containing information about the square
    * */
    constructor(square: ISquare) {
        super(square);
        this.side = square.side;
    }

    /*
    * Draws a filled square on the canvas using the : x and y of it's starting positions, and it's
    * width and height.
    * */
    draw(): void {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(this.position.x, this.position.y, this.side, this.side);
    }

    /*
    * Clears the square from the canvas.
    * */
    clear(): void {
        this.ctx.clearRect(this.position.x, this.position.y, this.side, this.side);
    }

    /**
     * Updates the square. (Not implemented)
     * @throws Error - This method is not implemented.
     */
    update(): void {
        throw new Error("Method not implemented.");
    }

}