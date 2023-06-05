


// String
const firstName = 'henry';
console.log(firstName, typeof firstName);

// Number
const over = 1.4;
console.log(over, typeof over);

// Boolean
const hasWon = false;
console.log(hasWon, typeof hasWon);

// Null
const pinCode = null;
console.log(pinCode, typeof pinCode);

// Undefined
let achievement;;
console.log(achievement, typeof achievement);

const age = undefined;
console.log(age, typeof age);

// Symbol
const myRole = Symbol('developer');
console.log(myRole, typeof myRole);

// BigInt
const valueOfPi = BigInt("314159265358979323846");
console.log(valueOfPi, typeof valueOfPi);

const n = 74387539084n;
console.log(n, typeof n);


// Object
const oddNumber = [1, 3, 5, 7, 9];
console.log(oddNumber, typeof oddNumber);

const employee = {
    name: 'henry',
    age: 30,
}
console.log(employee, typeof employee);


const currentDate = new Date();
console.log(currentDate, typeof currentDate);


function getNum(){
    console.log('32')
}