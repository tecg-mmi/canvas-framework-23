import {Hsl} from "./Hsl";
/*
* This Hsl class allows you create colors of HSL types and to add an opacity to the colors. that Hsla inherits all the properties and methods of Hsl class.
* */
export class Hsla extends Hsl {
    /*
* This proprety defines a protected instance variable called alpha that stores the alpha (the transparency) component of the color, represented as a number between 0 and 1. this property is readonly
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
   * @return : It returns a string in HSLA format to create the color with the hue, saturation, lightness, and alpha initialized in the constructor
   * This is a public method called toString that returns a string representation of the color in the HSL format. It uses template literals to construct a string that includes the hue, saturation, and lightness values, separated by commas and surrounded by the hsl() function. The method has an arrow function expression assigned to it, which is a concise way of defining a function in TypeScript.
   * */
    public toString = (): string => {
        return `hsla(${this.hue},${this.saturation}%,${this.lightness}%,${this.alpha})`;
    }
}