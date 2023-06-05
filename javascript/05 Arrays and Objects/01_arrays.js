// Array is a special variable, which can hold more than one value
// It is a common practice to declare arrays with the const keyword

// 1. Creating an Array

// A. Array literal
const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
const numbers = [23, 42, 55, 16, 64, 75];
const ageName = ['John', 28, 'Mike', 46, 'Andrews' , 35];
console.log(fruits);

// we can also create an array, and then provide the elements
const phones = [];
phones[0] = 'Samsung';
phones[1] = 'Vivo';
phones[2] = 'Oneplus';
console.log(phones);

// B. Array Constructor
const oddNum = new Array(1, 3, 5, 7, 9);
console.log(oddNum);


// 2. length Property
let lengthOfArr;

lengthOfArr = phones.length;
console.log(lengthOfArr); // 3

lengthOfArr = numbers.length;
console.log(lengthOfArr); // 6

lengthOfArr = fruits.length;
console.log(lengthOfArr); // 4



// 3. Accessing Array Elements
// Array index start from 0
let getArrPosition;

getArrPosition = phones[2];
console.log(getArrPosition);  //Oneplus

getArrPosition = numbers[0];
console.log(getArrPosition);  //23

getArrPosition =   `My Favourite Phone is ${phones[2]}`
console.log(getArrPosition); // My Favourite Phone is Oneplus


// Accessing the First Array Element
let firstArrEle = ageName[0];
console.log(firstArrEle);  // John


// Accessing the Last Array Element
let lastArrEle;
lastArrEle = ageName[ageName.length -1];
console.log(lastArrEle);  // 35

//shorter way
lastArrEle = ageName.at(-1);
console.log(lastArrEle);  // 35



// 4. Changing an Array Element
let changeArr;

changeArr = phones[1] = 'Oppo';
console.log(changeArr, phones);  // Oppo [ 'Samsung', 'Oppo', 'Oneplus' ]

changeArr = phones[0] = 'Xiomi';
console.log(phones);  // [ 'Xiomi', 'Oppo', 'Oneplus' ]


// 5. Adding array elements
let addArr;

addArr = phones[2] + numbers[1];
console.log(addArr); // Oneplus42

addArr = phones[1] + numbers[5];
console.log(addArr); // Oppo75

addArr = ageName[4] + ' ' + phones[0] + ' ' + numbers[3];
console.log(addArr); // Andrews Xiomi 16

addArr = `${ageName[4]} ${phones[0]}${numbers[3]}`;
console.log(addArr); // Andrews Xiomi16


// 6. Converting an Array to a String
let changeToStr = fruits.toString();
console.log(changeToStr);   // Apple,Mango,Banana,Orange