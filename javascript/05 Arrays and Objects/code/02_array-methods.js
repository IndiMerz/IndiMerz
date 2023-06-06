// 1. Popping and Pushing
// pop() removes the last element from an array
// push() adds a new element to an array at the end
const myFavBrands = ['Apple', 'Oneplus', 'Oppo', 'Samsung'];

let remove = myFavBrands.pop();
console.log(myFavBrands); // [ 'Apple', 'Oneplus', 'Oppo' ]

let add = myFavBrands.push('Vivo');
console.log(myFavBrands); // [ 'Apple', 'Oneplus', 'Oppo', 'Vivo' ]



// 2. Shifting and Unshifting
// shift() removes the first array element
// unshift() adds a new element to an array at the beginning
const vegetables = ['Potato', 'Tomato', 'Brinjal'];

vegetables.shift();
console.log(vegetables); // [ 'Tomato', 'Brinjal' ]

vegetables.unshift('Cabbage');
console.log(vegetables); // [ 'Cabbage', 'Tomato', 'Brinjal' ]



// 3.  Splicing and Slicing
// splice() can be used to add new or remove existing elements to an array
// slice() slices out a piece of an array into a new array
const countries = ['India', 'US', 'Japan', 'Brazil', 'Canada', 'Ireland'];

let spliceOp;
// (splice(x,y) means start from x position, remove y elements)

// removing elements by splice
spliceOp = countries.splice(2, 3);
console.log(spliceOp, countries);
// Removed:    [ 'Japan', 'Brazil', 'Canada' ] 
// Available:  [ 'India', 'US', 'Ireland' ]

console.log(countries[2]); // Ireland

spliceOp = countries.splice(1);
console.log(countries); // [ 'India' ]

// adding elements 

spliceOp = countries.splice(0, 0, 'Russia', 'China', 'Greenland');
console.log(countries); // [ 'Russia', 'China', 'Greenland', 'India' ]

spliceOp = countries.splice(3, 0, 'Denmark');
console.log(countries); //[ 'Russia', 'China', 'Greenland', 'Denmark', 'India' ]

spliceOp = countries.splice(2, 1, 'Australia', 'England');
console.log(countries); // [ 'Russia', 'China', 'Australia', 'England', 'Denmark', 'India' ]


let sliceOp;
// slice() does not remove any elements from the source array, it creates a new array

// slice out rest of elements starting from 2 into new array
sliceOp = countries.slice(2);
console.log(sliceOp, countries);
// New Array :       [ 'Australia', 'England', 'Denmark', 'India' ] 
// Source Array :    [ 'Russia', 'China', 'Australia', 'England', 'Denmark', 'India' ]


// slice(x, y): x included, y excluded
sliceOp = countries.slice(2, 4);
console.log(sliceOp);  // [ 'Australia', 'England' ]