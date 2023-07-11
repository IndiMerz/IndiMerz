const { it } = require("node:test");

const set = new Set([1, 2, 3, 3, 4, 4, 4, 5, 6, 6]);

console.log(set);
// Set(6) { 1, 2, 3, 4, 5, 6 }

// add
set.add(7)
console.log(set);  // Set(7) { 1, 2, 3, 4, 5, 6, 7 }


// checking set has value present
console.log(set.has(4));  // true
console.log(set.has(8));  // false


// delete value
set.delete(7);
console.log(set);  // Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(set.has(7));  // false


// converting set to array
const setArr = Array.from(set);
console.log(setArr);  // [ 1, 2, 3, 4, 5, 6 ]


// loop through value of set
for (const item of set) {
    console.log(item);  // 1 2 3 4 5 6
}


// iterators
const iterator = set.values();

console.log(iterator.next());  // { value: 1, done: false }
console.log(iterator.next());  // { value: 2, done: false }
console.log(iterator.next());  // { value: 3, done: false }
console.log(iterator.next());  // { value: 4, done: false }
console.log(iterator.next());  // { value: 5, done: false }
console.log(iterator.next());  // { value: 6, done: false }
console.log(iterator.next());  // { value: undefined, done: true }


// clear the set
set.clear();
console.log(set);  // Set(0) {}
