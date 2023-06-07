# Array Methods


## 1. Popping and Pushing
> The `pop()` method removes the last element from an array, while the `push()` method adds a new element to the end of an array.

For example:
```javascript
const myFavBrands = ['Apple', 'Oneplus', 'Oppo', 'Samsung'];

let removedBrand = myFavBrands.pop();
console.log(myFavBrands); // ['Apple', 'Oneplus', 'Oppo']

let addedBrand = myFavBrands.push('Vivo');
console.log(myFavBrands); // ['Apple', 'Oneplus', 'Oppo', 'Vivo']
```


## 2. Shifting and Unshifting
> The `shift()` method removes the first element from an array, while the `unshift()` method adds a new element to the beginning of an array.

For example:
```javascript
const vegetables = ['Potato', 'Tomato', 'Brinjal'];

vegetables.shift();
console.log(vegetables); // ['Tomato', 'Brinjal']

vegetables.unshift('Cabbage');
console.log(vegetables); // ['Cabbage', 'Tomato', 'Brinjal']
```


## 3. Splicing and Slicing
> The `splice()` method can be used to add new elements or remove existing elements from an array. On the other hand, the `slice()` method slices out a portion of an array and returns a new array.

For example:
```javascript
const countries = ['India', 'US', 'Japan', 'Brazil', 'Canada', 'Ireland'];

// Removing elements using splice
let removedCountries = countries.splice(2, 3);
console.log(removedCountries, countries);
// Removed:    ['Japan', 'Brazil', 'Canada']
// Remaining:  ['India', 'US', 'Ireland']

console.log(countries[2]); // 'Ireland'

// Adding elements using splice
let addedCountries = countries.splice(0, 0, 'Russia', 'China', 'Greenland');
console.log(countries); // ['Russia', 'China', 'Greenland', 'India']

addedCountries = countries.splice(3, 0, 'Denmark');
console.log(countries); // ['Russia', 'China', 'Greenland', 'Denmark', 'India']

addedCountries = countries.splice(2, 1, 'Australia', 'England');
console.log(countries); // ['Russia', 'China', 'Australia', 'England', 'Denmark', 'India']

// Slicing elements using slice
let slicedCountries = countries.slice(2);
console.log(slicedCountries, countries);
// New Array:     ['Australia', 'England', 'Denmark', 'India']
// Source Array:  ['Russia', 'China', 'Australia

', 'England', 'Denmark', 'India']

slicedCountries = countries.slice(2, 4);
console.log(slicedCountries); // ['Australia', 'England']

```


## Array Sort


## 1. Sorting an Array Alphabetically
> The `sort()` method is used to sort an array alphabetically.

For example:
```javascript
const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Lucknow', 'Pune'];
cities.sort();
console.log(cities);  // ['Bangalore', 'Delhi', 'Lucknow', 'Mumbai', 'Pune']
```

## 2. Reversing Array Elements
> The `reverse()` method is used to reverse the order of elements in an array.

For example:
```javascript
const cities = ['Bangalore', 'Delhi', 'Lucknow', 'Mumbai', 'Pune'];
cities.reverse();
console.log(cities);  // ['Pune', 'Mumbai', 'Lucknow', 'Delhi', 'Bangalore']
```


## 3. Numeric Sorting
> Sorting numeric values in an array requires a custom comparison function.

### a) Ascending Order
> To sort numeric values in ascending order, a custom comparison function can be passed to the `sort()` method.

For example:
```javascript
const numbers = [2, 24, 13, 53, 22, 31, 11, 41, 3, 24];
numbers.sort(function(a, b) { return a - b; });

console.log(numbers);  // [2, 3, 11, 13, 22, 24, 24, 31, 41, 53]
```

### b) Descending Order
> To sort numeric values in descending order, the custom comparison function can be modified to return a positive value if `b` should be sorted before `a`.

For example:
```javascript
const numbers = [2, 24, 13, 53, 22, 31, 11, 41, 3, 24];
numbers.sort(function(a, b) { return b - a; });

console.log(numbers);  // [53, 41, 31, 24, 24, 22, 13, 11, 3, 2]
```


## Merging (Concatenating) Arrays
> The concat() method creates a new array by merging (concatenating) existing arrays

Example:

```js
const evenNum = [1, 3, 5, 7, 9];
const oddNum = [0, 2, 4, 6, 8];
const wholeNum = evenNum.concat(oddNum);
console.log(wholeNum);  // [ 1, 3, 5, 7, 9, 0, 2, 4, 6, 8 ]

// to sort it in ascending order
const wholeNumSort = evenNum.concat(oddNum).sort(function(a, b) { return a - b; });
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// Concat by Spread Operator
let concatBySpreadOp = [...evenNum, ...oddNum];

```

## Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.

Example
```js
const myArr = [1, 2, [3, 4], 5, [6, 7], 8]
const flatIt = myArr.flat(); 
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]

```

## Static Methods on Array Objects

- `Array.from()`: 
   Creates a new array from an iterable or array-like object.
   
   Example:
   ```javascript
   const str = 'hello';
   const charArray = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
   ```

- `Array.isArray(value)`: 
   > Checks if the provided value is an array.

   Example:
   ```javascript
   const arr = [1, 2, 3];
   const isArr = Array.isArray(arr); // true
   ```

- `Array.of()`: 
  > Creates a new array with the provided elements as its elements.

   Example:
   ```javascript
   const x = 1;
   const y = 2;
   const z = 3;
   const arr = Array.of(x, y, z); // [1, 2, 3]
   ```
