/*
*Defines a class called RandomArray that holds an array of elements of a generic type and make possible to work with random table. The constructor initializes the array property with the provided array.
 */
export class RandomArray<Type> {
    private readonly array: Array<Type>;

    constructor(array: Array<Type>) {
        this.array = array
    }
    /*
    * @return :  a random element from the array.
     */
    getRandomValue(): Type {
        return this.array[Math.floor(Math.random() * this.array.length)];
    }
}
