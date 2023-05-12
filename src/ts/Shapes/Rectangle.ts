import {Position} from "../Types/position";
import {Shape} from "./Shape";
import {Animatable} from "../Types/Animatable";
import {IRectangle} from "../Types/IRectangle";

/**
 * Represents a rectangle shape on the canvas that can be animated.
 * 
 * @exports Rectangle
 * @extends Shape
 * @implements Animatable
 */
export class Rectangle extends Shape implements Animatable {

    protected readonly width: number;
    protected readonly height: number;

     /**
     * Constructs a new Rectangle object.
     *
     * @param rectangle An object containing the initial properties of rectangle (width, heigth) extended of shape (canvas, position, color, speed[optional], direction[optional]
     * Must have a 'width' and 'height' property of type number.
     * @interface IRectangle
     */
    constructor(rectangle: IRectangle) {
        super(rectangle);
        this.width = rectangle.width;
        this.height = rectangle.height;
    }

    /**
     * Draws the rectangle on the canvas
     * @returns The current Rectangle object.
     */
    draw() {
        this.ctx.save(); // save the current state of the context
        this.ctx.translate(Math.trunc(this.position.x + this.width / 2), Math.trunc(this.position.y + this.height / 2)); // move the origin of the coordinate system to the center of the rectangle
        this.ctx.rotate(this.direction); // apply the rotation transformation
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(-Math.trunc(this.width / 2), -Math.trunc(this.height / 2), this.width, this.height); // draw the rectangle centered at the origin
        this.ctx.restore(); // restore the previous state of the context
        return this;
    }

    /**
     * Updates the position and direction of the rectangle based on its speed and current direction.
     */
    update() {
        this.position.x += Math.floor(this.speed * Math.cos(this.direction));
        this.position.y += Math.floor(this.speed * Math.sin(this.direction));

        if (this.position.x <= 0 || this.position.x + this.width >= this.canvas.width) {
            this.direction = Math.PI - this.direction;
        }

        if (this.position.y <= 0 || this.position.y + this.height >= this.canvas.height) {
            this.direction = -this.direction;
        }
    }

    /**
     * Sets the direction of the rectangle based on the position of the mouse cursor.
     *
     * @param position The current position of the mouse cursor.
     */
    setDirectionByMousePosition(position: Position) {
        this.direction = Math.atan2(position.y - this.position.y, position.x - this.position.x);
    }

    /**
     * Clears the rectangle from the canvas.
     */
    clear(): void {
        this.ctx.clearRect(this.position.x, this.position.y, this.width, this.height);
    }
}