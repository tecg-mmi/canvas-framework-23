import {Rgb} from "./Rgb";

/**
 * An RGBA color.
 *
 * @extends Rgb
 * @param red - The red component of the RGBA color int(0-255) (read only).
 * @param green - The green component of the RGBA color int(0-255) (read only).
 * @param blue - The blue component of the RGBA color int(0-255) (read only).
 * @param alpha - The alpha component of the RGBA color float(0-1) (read only).
 */
export class Rgba extends Rgb {
    private readonly alpha: number;

    /**
     * Creates an instance of the Rgba class.
     *
     * @param red - The red component of the RGBA color int(0-255) (read only).
     * @param green - The green component of the RGBA color int(0-255) (read only).
     * @param blue - The blue component of the RGBA color int(0-255) (read only).
     * @param alpha - The alpha component of the RGBA color float(0-1) (read only).
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