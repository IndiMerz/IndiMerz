// 1. Popping and Pushing

const myFavBrands = ['Apple', 'Oneplus', 'Oppo', 'Samsung'];

let remove = myFavBrands.pop();
console.log(myFavBrands); // [ 'Apple', 'Oneplus', 'Oppo' ]

let add = myFavBrands.push('Vivo');
console.log(myFavBrands); // [ 'Apple', 'Oneplus', 'Oppo', 'Vivo' ]



// 2. Shifting and Unshifting

const vegetables = ['Potato', 'Tomato', 'Brinjal'];

vegetables.shift();
console.log(vegetables); // [ 'Tomato', 'Brinjal' ]

vegetables.unshift('Cabbage');
console.log(vegetables); // [ 'Cabbage', 'Tomato', 'Brinjal' ]



// 3.  Splicing and Slicing

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


// slice(x, y): x included, y excluded
sliceOp = countries.slice(2, 4);
console.log(sliceOp);  // [ 'Australia', 'England' ]

// concat

const evenNum = [1, 3, 5, 7, 9];
const oddNum = [0, 2, 4, 6, 8];
const wholeNum = evenNum.concat(oddNum).sort(function(a, b) { return a - b; });
console.log(wholeNum);

const ax = [13, 33, 45, 57, 95];
const by = [45, 24, 64, 63, 58];
const cz = [55, 22, 44, 36, 84];
const concat = ax.concat(by, cz)
console.log(concat);

// concat by spread operator

let concatBySpreadOp = [...evenNum, ...oddNum];
console.log(concatBySpreadOp);


// to remove occurance
const arr1 = [32, 54, 65, 75];
const arr2 = [21, 53, 75, 35];
const arr3 = [...new Set(arr1.concat(arr2))];
console.log(arr3);


const arr10 = ['apple', 'mango', 'banana'];
const arr20 = ['watermelon', 'banana', 'orange'];
const arr30 = [...new Set(arr10.concat(arr20))];
console.log(arr30);


// flat

const myArr = [1, 2, [3, 4], 5, [6, 7], 8]
const flatIt = myArr.flat();
console.log(flatIt);


// isArray

let x;

x = Array.isArray(myArr);


// from

x = Array.from('78295')


// of
const mk = 'apple';
const uk = 'banana';
x = Array.of(mk,uk)



console.log(x)