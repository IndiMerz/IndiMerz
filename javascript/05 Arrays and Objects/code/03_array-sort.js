// 1. sort() method sorts an array alphabetically
const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Lucknow', 'Pune'];
cities.sort();
console.log(cities);  // [ 'Bangalore', 'Delhi', 'Lucknow', 'Mumbai', 'Pune' ]


// 2. reverse() method reverses the elements
cities.reverse();
console.log(cities);  // [ 'Pune', 'Mumbai', 'Lucknow', 'Delhi', 'Bangalore' ]


// 3. Numeric Sort

// ascending order
const numbers = [2, 24, 13, 53, 22, 31, 11, 41, 3, 24];
numbers.sort(function(a,b){return a-b});
console.log(numbers);  // [  2,  3, 11, 13, 22, 24, 24, 31, 41, 53 ]

// descending order
numbers.sort(function(a,b){return b-a});
console.log(numbers);  // [ 53, 41, 31, 24, 24, 22, 13, 11,  3,  2 ]