import {Rgb} from "./Rgb";

/**
 * An RGBA color.
 *
 * @extends Rgb
 * @param @readonly red - The red component of the RGBA color int(0-255).
 * @param @readonly green - The green component of the RGBA color int(0-255).
 * @param @readonly blue - The blue component of the RGBA color int(0-255).
 * @param @readonly alpha - The alpha component of the RGBA color float(0-1).
 */
export class Rgba extends Rgb {
    private readonly alpha: number;

    /**
     * Creates an instance of the Rgba class.
     *
     * @param red - The red component of the RGBA color int(0-255).
     * @param green - The green component of the RGBA color int(0-255).
     * @param blue - The blue component of the RGBA color int(0-255).
     * @param alpha - The alpha component of the RGBA color float(0-1).
     */
    constructor(red: number, green: number, blue: number, alpha: number) {
        super(red, green, blue);
        this.alpha = alpha;
    }

    /**
     * @return a string of the color in rgba form (rgba(r,g,b,a)).
     */
    public toString = (): string => {
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }
}