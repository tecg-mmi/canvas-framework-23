import {Circle} from "../Shapes/Circle";
import {IMouse} from "../Types/IMouse";

/*
* It represents a mouse cursor by a circle (extended from Circle), we can allow it to be visible with a radius and a color on a canvas and allows tracking its position using the mousemove event.
 */

export class Mouse extends Circle {
    /*
    * The constructor initializes the Mouse object with the provided IMouse parameter and adds a mousemove event listener to update the mouse position.
    * The listener callback is triggered, and the x and y coordinates of the position property are updated based on the offsetX and offsetY values of the event object.
     */
    constructor(mouse: IMouse) {
        super({
            position: {x: 0, y: 0},
            color: mouse.color,
            canvas: mouse.canvas,
            radius: mouse.radius,
        });
        this.canvas.canvasElement.addEventListener('mousemove', (event: MouseEvent) => {
            this.position.x = event.offsetX;
            this.position.y = event.offsetY;
        });
    }

    /*
    * The update() method throw an exception.
     */

    update() {
        throw new Error("Method not implemented.");
    }

}