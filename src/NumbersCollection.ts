import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  /**
   * Create a getter function to allow access like a property
   */
  get length(): number {
    return this.data.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  public swap(leftIndex: number, rightIndex: number): void {
    //We need to swap the values
    //Take a copt of the element on the left
    const temp = this.data[leftIndex];

    //The value on the left becomes what was on the right
    this.data[leftIndex] = this.data[rightIndex];

    //The right value is updated to our copy of the left
    this.data[rightIndex] = temp;
  }
}
