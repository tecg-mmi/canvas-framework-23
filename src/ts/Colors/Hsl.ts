
/*
* This Hsl class allows you create colors of HSL types
* */
export class Hsl {
    /*
    * This proprety defines a protected instance variable that stores the hue component of the color, int(0-360) (read only).
    * */
    protected readonly hue: number;
    /*
    * This proprety defines a protected instance variable that stores the saturation component of the color, int(0-100) (read only).
    * */
    protected readonly saturation: number;
    /*
    * This proprety defines a protected instance variable that stores the lightness component of the color, int(0-100) (read only).
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
    * @return : @return a string of the color in hsl form (hsl(hue,saturation,lightness)).
    * */
    public toString = (): string => {
        return `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`;
    }
}