/**
 * usage: The Score class is used to increment and reset a score value, and display it in an HTML element that will automatically update itself.
 */
export class Score {
    private element: HTMLElement;
    private _score: number;

    /**
     * Creates a new instance of the Score class with an initial value of 0 and an HTML element to display the score automatically.
     * @param element - The HTML element to display the score.
     */
    constructor(element: HTMLElement) {
        this.element = element;
        this._score = 0;
    }
    /**
     * Increases the value of the score by 1 and updates the display of the score in the HTML element with the display method automatically.
     */
    increment() {
        this._score++;
        this.display();
    }

    /**
     * Resets the score value to 0 and updates the score display in the HTML element with the method display automatically.
     */
    reset() {
        this._score = 0;
        this.display();
    }
    /**
     * Updates the score display in the HTML element with the current score value.
     */
    display(): void {
        this.element.textContent = this._score.toString();
    }
    /**
     * @return: Returns the current value of the score.
     */
    score(): number {
        return this._score;
    }
}