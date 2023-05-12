/**
* An RGB color
*
* @param red - The red component of the RGB color int(0-255).
* @param green - The green component of the RGB color int(0-255).
* @param blue - The blue component of the RGB color int(0-255).
*/

export class Rgb {
    protected readonly red: number;
    protected readonly green: number;
    protected readonly blue: number;

    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    /**
     * @return a string of the color in rgb form (rgb(r,g,b))
     */
    public toString = (): string => {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }
}