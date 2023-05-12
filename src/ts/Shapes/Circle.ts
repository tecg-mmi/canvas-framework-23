import { Shape } from "./Shape";
import { Animatable } from "../Types/Animatable";
import { ICircle } from "../Types/ICircle";
import { Position } from "../Types/position";

/**
 * A class representing a circle shape that can be drawn and animated.
 * 
 * @exports Circle
 * @extends Shape
 * @implements Animatable
 */
export class Circle extends Shape implements Animatable {
    protected readonly radius: number;

    /**
     * Constructs a new Circle object.
     *
     * @param circle An object containing the initial properties of circle (radius) extended of shape (canvas, position,color, speed[optional], direction[optional]
     *  Must have a 'radius' property of type number.
     */
    constructor(circle: ICircle) {
        super(circle);
        this.radius = circle.radius;
    }

    /**
     * Draw the circle on the canvas with the origin of the circle at its center
     *
     * @returns The current Circle object.
     */
    draw(): Circle {
        this.ctx.beginPath();
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        return this;
    }

    /**
     * Updates the position and direction of the circle based on its current speed and direction.
     */
    update(): void {
        // Calculate the next position of the circle based on its speed and direction
        const nextX = Math.trunc(this.position.x + this.speed * Math.cos(this.direction));
        const nextY = Math.trunc(this.position.y + this.speed * Math.sin(this.direction));

        // Check if the circle touches the left or right edge of the canvas
        if (nextX + this.radius >= this.canvas.width || nextX - this.radius <= 0) {
            // Reverse the horizontal direction of the circle
            this.direction = Math.PI - this.direction;
        }

        // Check if the circle touches the top or bottom edge of the canvas
        if (nextY + this.radius >= this.canvas.height || nextY - this.radius <= 0) {
            // Reverse the vertical direction of the circle
            this.direction = -this.direction;
        }

        // Update the position of the circle
        this.position.x += Math.trunc(this.speed * Math.cos(this.direction));
        this.position.y += Math.trunc(this.speed * Math.sin(this.direction));
    }

    /**
     * Sets the direction of the circle based on the position of the mouse cursor.
     *
     * @param position The current position of the mouse cursor.
     */
    setDirectionByMousePosition(position: Position): void {
        this.direction = Math.atan2(position.y - this.position.y, position.x - this.position.x);
    }

    /**
     * This method is not implemented for Circle objects.
     * Throws an error if called.
     */
    clear(): void {
        throw new Error("Method not implemented.");
    }
}
