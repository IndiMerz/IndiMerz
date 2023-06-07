// Que: combine arr1 and arr2 into a new arr called arr3, element should not repeat.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];


const arr3 = [...new Set(arr1.concat(arr2))]
console.log(arr3);

// another way:

const arr4 = arr1.concat(arr2);
arr4.splice(4, 1);
console.log(arr4);