# Sorting


## 1. Sorting an Array Alphabetically
The `sort()` method is used to sort an array alphabetically.

For example:
```javascript
const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Lucknow', 'Pune'];
cities.sort();
console.log(cities);  // ['Bangalore', 'Delhi', 'Lucknow', 'Mumbai', 'Pune']
```

In the above example, the `sort()` method is applied to the `cities` array, which contains city names. The method arranges the elements in alphabetical order, resulting in the array `['Bangalore', 'Delhi', 'Lucknow', 'Mumbai', 'Pune']`.

## 2. Reversing Array Elements
The `reverse()` method is used to reverse the order of elements in an array.

For example:
```javascript
const cities = ['Bangalore', 'Delhi', 'Lucknow', 'Mumbai', 'Pune'];
cities.reverse();
console.log(cities);  // ['Pune', 'Mumbai', 'Lucknow', 'Delhi', 'Bangalore']
```

In the above example, the `reverse()` method is applied to the `cities` array. The method changes the order of elements to reverse it, resulting in the array `['Pune', 'Mumbai', 'Lucknow', 'Delhi', 'Bangalore']`.

## 3. Numeric Sorting
Sorting numeric values in an array requires a custom comparison function.

### a) Ascending Order
To sort numeric values in ascending order, a custom comparison function can be passed to the `sort()` method.

For example:
```javascript
const numbers = [2, 24, 13, 53, 22, 31, 11, 41, 3, 24];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);  // [2, 3, 11, 13, 22, 24, 24, 31, 41, 53]
```

In the above example, the `sort()` method is applied to the `numbers` array. The custom comparison function `(a, b) => a - b` compares two numbers and returns a negative value if `a` should be sorted before `b`. This sorting logic arranges the elements in ascending order, resulting in the array `[2, 3, 11, 13, 22, 24, 24, 31, 41, 53]`.

### b) Descending Order
To sort numeric values in descending order, the custom comparison function can be modified to return a positive value if `b` should be sorted before `a`.

For example:
```javascript
const numbers = [2, 24, 13, 53, 22, 31, 11, 41, 3, 24];
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);  // [53, 41, 31, 24, 24, 22, 13, 11, 3, 2]
```

In the above example, the custom comparison function `(a, b) => b - a` compares two numbers and returns a positive value if `b` should be sorted before `a`. This modified sorting logic arranges the elements in descending order, resulting in the array `[53, 41, 31, 24, 24, 22, 13, 11, 3, 2]`.