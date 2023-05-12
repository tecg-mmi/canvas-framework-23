/**
* An RGB color.
*
* @param red - The red component of the RGB color int(0-255) (read only).
* @param green - The green component of the RGB color int(0-255) (read only).
* @param blue - The blue component of the RGB color int(0-255) (read only).
*/

export class Rgb {
    protected readonly red: number;
    protected readonly green: number;
    protected readonly blue: number;

    /**
     * Creates an instance of the Rgb class.
     *
     * @param red - The red component of the RGB color int(0-255) (read only).
     * @param green - The red component of the RGB color int(0-255) (read only).
     * @param blue - The red component of the RGB color int(0-255) (read only).
     */
    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    /**
     * @return a string of the color in rgb form (rgb(r,g,b)).
     */
    public toString = (): string => {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }
}