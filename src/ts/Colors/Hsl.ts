
/*
* This Hsl class allows you create colors of HSL types
* */
export class Hsl {
    /*
    * This proprety defines a protected instance variable called hue that stores the hue component of the color, represented as a number between 0 and 360. this property is readonly
    * */
    protected readonly hue: number;
    /*
    * This proprety defines a protected instance variable called saturation that stores the saturation component of the color, represented as a number between 0 and 100. this property is readonly
    * */
    protected readonly saturation: number;
    /*
    * This proprety defines a protected instance variable called lightness that stores the lightness component of the color, represented as a number between 0 and 100. this property is readonly
    * */
    protected readonly lightness: number;

    /*
    * constructor(hue: number, saturation: number, lightness: number)
    * This is the constructor of the Hsl class, which takes three parameters: hue, saturation, and lightness. These parameters are used to initialize the hue, saturation, and lightness instance variables, respectively.
    * all these parameters are numbers.
    * */
    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    /*
    * @return : It returns a string in HSL format to create the color with the hue, saturation, and lightness initialized in the constructor
    * This is a public method called toString that returns a string representation of the color in the HSL format. It uses template literals to construct a string that includes the hue, saturation, and lightness values, separated by commas and surrounded by the hsl() function. The method has an arrow function expression assigned to it, which is a concise way of defining a function in TypeScript.
    * */
    public toString = (): string => {
        return `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`;
    }
}