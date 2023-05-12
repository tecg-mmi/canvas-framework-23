import {Hsl} from "./Hsl";
/*
* This Hsl class allows you create colors of HSLA types. that Hsla inherits all the properties and methods of Hsl class.
* */
export class Hsla extends Hsl {
    /*
* This proprety defines a protected instance variable that stores the alpha (the transparency) component of the color, float (0-1) (read only).
* */
    private readonly alpha: number;

    /*
    * This is the constructor of the Hsla class, which takes four parameters: hue, saturation, lightness, and alpha. These parameters are used to initialize the hue, saturation, lightness, and alpha instance variables, respectively. The constructor also calls the constructor of the Hsl class using the super keyword, passing in the hue, saturation, and lightness parameters
    * */
    constructor(hue: number, saturation: number, lightness: number, alpha: number) {
        super(hue, saturation, lightness);
        this.alpha = alpha;
    }

    /*
   * @return : @return a string of the color in hsla form (hsl(hue,saturation,lightness,alpha)).
   * */
    public toString = (): string => {
        return `hsla(${this.hue},${this.saturation}%,${this.lightness}%,${this.alpha})`;
    }
}