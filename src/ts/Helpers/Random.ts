import {MinMax} from "../Types/MinMax";
/**
 * Represents a random number generator that can generate integers and floating-point numbers within a specified range.
 */
export class Random {
    /**
     * @param @readonly min is the minimum value of the range(inclusive).
     * @param @readonly max is the maximum value of the range (inclusive).
     * */
    private readonly min: number;
    private readonly max: number;

    /***
     * Creates an instance of Random class with the given range.
     * @param min is the minimum value of the range(inclusive).
     * @param max is the maximum value of the range (inclusive).
     */
    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    /**
     * @param max The minimum value that can be generated.
     * @param min The maximum value that can be generated.
     * @return a new random integer number rounded down between `min` and `max`.
     */
    nextInt(): number {
        if (this.min < this.max) {
            return this.min + Math.random() * (this.max - this.min);
        }
        return Math.floor(1 + Math.random() * 100);
    }

    /**
     * @param min The minimum value that can be generated.
     * @param max The maximum value that can be generated.
     * @return A random integer between `min` and `max`.
     */
    static nextInt(min: number, max: number): number {
        if (min < max) {
            return Math.floor(min + Math.random() * (max - min));
        }
        return Math.floor(1 + Math.random() * 100);
    }

    /**
     * Generates a random integer between `minMax.min` and `minMax.max`.
     * @param minMax An object containing the minimum and maximum values that can be generated.
     * @return a random integer between `minMax.min` and `minMax.max`.
     */
    static nextIntMinMax(minMax: MinMax): number {
        return this.nextInt(minMax.min, minMax.max);
    }

    /**
     * @return a random floating-point number between `min` and `max`.
     */
    nextFloat(): number {
        if (this.min < this.max) {
            return this.min + Math.random() * (this.max - this.min);
        }
        return 1 + Math.random() * 100;
    }


    /**
     * @param min The minimum value that can be generated.
     * @param max The maximum value that can be generated.
     * @return a random floating-point number between `min` and `max`.
     */
    static nextFloat(min: number, max: number): number {
        if (min < max) {
            return min + Math.random() * (max - min);
        }
        return 1 + Math.random() * 100;
    }

    /**
     * @param minMax An object containing the minimum and maximum values that can be generated.
     * @return a random floating-point number between `minMax.min` and `minMax.max`.
     */
    static nextFloatMinMax(minMax: MinMax): number {
        return this.nextFloat(minMax.min, minMax.max);
    }
}