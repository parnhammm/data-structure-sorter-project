export class Sorter {
  constructor(public collection: number[]) {}

  /**
   * Attempts to sort the collection using the bubble sort method
   */
  public bubbleSort(): void {
    //Getting the property off the collection using ES2015 destructuring
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          //We need to swap the values
          //Take a copt of the element on the left
          const temp = this.collection[j];

          //The value on the left becomes what was on the right
          this.collection[j] = this.collection[j + 1];

          //The right value is updated to our copy of the left
          this.collection[j + 1] = temp;
        }
      }
    }
  }
}
