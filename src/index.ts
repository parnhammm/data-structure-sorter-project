import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, -3, 5, 1]);
let sorter = new Sorter(numbersCollection);

sorter.bubbleSort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("aXaa");
sorter = new Sorter(charactersCollection);

sorter.bubbleSort();

console.log(charactersCollection.data);
