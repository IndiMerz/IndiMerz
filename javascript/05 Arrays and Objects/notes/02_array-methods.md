# Array Methods


## 1. Popping and Pushing
The `pop()` method removes the last element from an array, while the `push()` method adds a new element to the end of an array.

For example:
```javascript
const myFavBrands = ['Apple', 'Oneplus', 'Oppo', 'Samsung'];

let removedBrand = myFavBrands.pop();
console.log(myFavBrands); // ['Apple', 'Oneplus', 'Oppo']

let addedBrand = myFavBrands.push('Vivo');
console.log(myFavBrands); // ['Apple', 'Oneplus', 'Oppo', 'Vivo']
```

In the above example, `pop()` is used to remove the last element from the `myFavBrands` array, which is `"Samsung"`. The modified array now contains `['Apple', 'Oneplus', 'Oppo']`.

Then, `push()` is used to add the brand `"Vivo"` to the `myFavBrands` array. The modified array now contains `['Apple', 'Oneplus', 'Oppo', 'Vivo']`.

## 2. Shifting and Unshifting
The `shift()` method removes the first element from an array, while the `unshift()` method adds a new element to the beginning of an array.

For example:
```javascript
const vegetables = ['Potato', 'Tomato', 'Brinjal'];

vegetables.shift();
console.log(vegetables); // ['Tomato', 'Brinjal']

vegetables.unshift('Cabbage');
console.log(vegetables); // ['Cabbage', 'Tomato', 'Brinjal']
```

In the above example, `shift()` is used to remove the first element `"Potato"` from the `vegetables` array. The modified array now contains `['Tomato', 'Brinjal']`.

Then, `unshift()` is used to add the vegetable `"Cabbage"` to the beginning of the `vegetables` array. The modified array now contains `['Cabbage', 'Tomato', 'Brinjal']`.


## 3. Splicing and Slicing
The `splice()` method can be used to add new elements or remove existing elements from an array. On the other hand, the `slice()` method slices out a portion of an array and returns a new array.

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

In the above example, `splice()` is used to remove elements from the `countries` array. The first `splice()` call removes 3 elements starting from index 2, resulting in the `removedCountries` array containing `['Japan', 'Brazil', 'Canada']`. The modified `countries` array now contains `['India', 'US', 'Ireland']`. The second `splice()` call adds the country `"Denmark"` at index 3, and the third `splice()` call replaces 1 element at index 2 with the countries `"Australia"` and `"England"`. The final `countries` array becomes `['Russia', 'China', 'Australia', 'England', 'Denmark', 'India']`.

The `slice()` method is used to create new arrays from the `countries` array. The first `slice()` call slices out elements starting from index 2, resulting in the `slicedCountries` array containing `['Australia', 'England', 'Denmark', 'India']`. The original `countries` array remains unchanged. The second `slice()` call slices out elements from index 2 to 4 (exclusive), resulting in the `slicedCountries` array containing `['Australia', 'England']`.