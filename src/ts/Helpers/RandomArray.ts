/*
*The class has a private property called array, which is an array of type Type. The constructor takes an array of type Type and assigns it to the array property.
 */
export class RandomArray<Type> {
    private readonly array: Array<Type>;

    constructor(array: Array<Type>) {
        this.array = array
    }
    /*
    *The class has a method called getRandomValue(), which returns a random element from the array. It uses the Math.random() function to generate a random number between 0 and 1, multiplies it by the length of the array, and uses Math.floor() to round down to the nearest whole number. This resulting number is used as an index to retrieve a random element from the array, which is then returned.
     */
    getRandomValue(): Type {
        return this.array[Math.floor(Math.random() * this.array.length)];
    }
}
