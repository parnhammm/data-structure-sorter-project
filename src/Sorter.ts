import { NumbersCollection } from "./NumbersCollection";

export interface Sortable {
  length: number;

  swap(leftIndex: number, rightIndex: number): void;

  compare(leftIndex: number, rightIndex: number): boolean;
}

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  /**
   * Attempts to sort the collection using the bubble sort method
   */
  public bubbleSort(): void {
    //Getting the property off the collection using ES2015 destructuring
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
