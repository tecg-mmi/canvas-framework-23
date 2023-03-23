import {Animatable} from "./Types/Animatable";

export class Animate {
    private animated: Animatable[];

    constructor() {
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
            animate.clear();
            animate.draw();
            animate.update();
        });
        requestAnimationFrame(this.animate.bind(this));
    }
}