import {Animatable} from "./Types/Animatable";
import {GameStatus} from "./Types/GameStatus";

/**
 * Manages the animation loop for animatable objects.
 *
 * @param animated - The array of animatable objects.
 * @interface Animatable
 *
 * @param gameStatus - The game status object that controls the animation loop.
 * @interface GameStatus
 */
export class Animate {
    private animated: Animatable[];
    private gameStatus: GameStatus;

    /**
     * Creates an instance of the Animate class.
     *
     * @param gameStatus - The game status object that controls the animation loop.
     * @interface GameStatus
     */
    constructor(gameStatus: GameStatus) {
        this.gameStatus = gameStatus;
        this.animated = [];
    }

    /**
     * Starts the animation loop.
     */
    public start() {
        this.animate()
    }

    /**
     * Adds an animatable object.
     *
     * @param animated - The animatable object
     * @interface Animatable
     */
    public registerForAnimation(animated: Animatable) {
        this.animated.push(animated);
    }

    /**
     * Performs the animation loop for all registered objects.
     * This method is called recursively using requestAnimationFrame.
     * It clears, updates, and draws each registered object in every animation frame.
     * The animation loop continues as long as gameStatus.start is true.
     * @private
     */
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