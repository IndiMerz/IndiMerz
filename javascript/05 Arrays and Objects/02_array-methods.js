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
console.log(vegetables);  // [ 'Tomato', 'Brinjal' ]

vegetables.unshift('Cabbage');
console.log(vegetables);  // [ 'Cabbage', 'Tomato', 'Brinjal' ]


