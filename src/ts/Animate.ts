import {Animatable} from "./Types/Animatable";
import {GameStatus} from "./Types/GameStatus";

export class Animate {
    private animated: Animatable[];
    private gameStatus: GameStatus;

    constructor(gameStatus: GameStatus) {
        this.gameStatus = gameStatus;
        this.animated = [];
    }

    public start() {
        this.animate()
    }

    public registerForAnimation(animated: Animatable) {
        this.animated.push(animated);
    }

    private animate() {
        if (this.gameStatus.start) {
            this.animated.forEach((animate) => {
                animate.clear();
                animate.update();
                animate.draw();
            });
            requestAnimationFrame(this.animate.bind(this));
        }
    }
}