import {Circle} from "../shapes/Circle";
import {ICircle} from "../Types/ICircle";

export class Mouse extends Circle {
    constructor(circle: ICircle) {
        super(circle);
        this.canvas.canvasElement.addEventListener('mousemove', (event: MouseEvent) => {
            this.position.x = event.x;
            this.position.y = event.y;
        });
    }

    update() {
        //
    }

}