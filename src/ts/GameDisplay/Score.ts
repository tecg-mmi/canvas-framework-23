/**
 * usage : increment and reset the score and the HTML element
 */
export class Score {
    private element: HTMLElement;
    private _score: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this._score = 0;
    }

    increment() {
        this._score++;
        this.display();

    }

    reset() {
        this._score = 0;
        this.display();
    }

    display(): void {
        this.element.textContent = this._score.toString();
    }

    score(): number {
        return this._score;
    }
}