import {Animatable} from "./Types/Animatable";
import {Canvas} from "./Canvas";

export class Animate {
    private animated: Animatable[];
    private canvas: Canvas;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.animated = [];
    }

    public start() {
        this.animate()
    }

    public registerForAnimation(animated: Animatable) {
        this.animated.push(animated);
    }

    private animate() {
        this.animated.forEach((animate) => {
            this.canvas.clear();
            animate.draw();
            animate.update();
        });
        requestAnimationFrame(this.animate.bind(this));
    }
}