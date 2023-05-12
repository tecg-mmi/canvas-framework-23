import {Rgb} from "./Rgb";

/**
 * An RGBa color
 *
 * @extends Rgb
 * @param red - The red component of the RGB color int(0-255).
 * @param green - The green component of the RGB color int(0-255).
 * @param blue - The blue component of the RGB color int(0-255).
 * @param alpha - The alpha component of the RGB color float(0-1).
 */
export class Rgba extends Rgb {
    private readonly alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        super(red, green, blue);
        this.alpha = alpha;
    }

    /**
     * @return a string of the color in rgba form (rgb(r,g,b,a))
     */
    public toString = (): string => {
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }
}