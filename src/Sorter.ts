export interface Sortable {
  /**
   * The length of the data structure
   */
  length: number;

  /**
   * Performs the swap of the values at leftIndex and rightIndex
   *
   * @param leftIndex
   * @param rightIndex
   */
  swap(leftIndex: number, rightIndex: number): void;

  /**
   * Returns the evaluation of leftIndex against rightIndex
   *
   * @param leftIndex
   * @param rightIndex
   */
  compare(leftIndex: number, rightIndex: number): boolean;
}

export abstract class Sorter implements Sortable {
  abstract length: number;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract compare(leftIndex: number, rightIndex: number): boolean;

  /**
   * Attempts to sort the collection using the bubble sort method
   */
  public bubbleSort(): void {
    //Getting the property off the collection using ES2015 destructuring
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
