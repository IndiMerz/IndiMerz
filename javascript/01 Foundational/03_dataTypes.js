/*
1. Primitive Types:
Primitive types are the fundamental or basic data types in JavaScript. They are immutable, meaning their values cannot be changed once they are created. 
The primitive types in JavaScript are:

Number
String
Boolean
Null
Undefined
Symbol

Primitive types are stored directly in memory and are compared by their value. When you assign a primitive value to a variable or pass it as an argument, a copy of the value is created.

2. Reference Types:
Reference types, also known as objects, are more complex data types. They can hold multiple values and have properties and methods. Reference types are mutable, meaning their values can be modified after they are created. 
The reference types in JavaScript include:

Object
Array
Function

Reference types are stored in memory, and variables of reference types hold references or pointers to the memory location where the actual values are stored. When you assign a reference type to a variable or pass it as an argument, you are working with a reference to the value in memory, rather than a direct copy of the value.

*/


// String
// Represents a sequence of characters enclosed in single ('') or double quotes ("").
const firstName = 'henry';
console.log(firstName, typeof firstName);

// Number
// Represents numeric values, including integers and floating-point numbers.
const over = 1.4;
console.log(over, typeof over);

// Boolean
// Represents a logical value of either true or false.
const hasWon = false;
console.log(hasWon, typeof hasWon);

// Null
// Represents the intentional absence of any object value.
const pinCode = null;
console.log(pinCode, typeof pinCode);

// Undefined
// Represents a variable that has been declared but has not been assigned a value.
let achievement;;
console.log(achievement, typeof achievement);

const age = undefined;
console.log(age, typeof age);

// Symbol
// Represents a unique identifier, used typically as keys in object properties.
const myRole = Symbol('developer');
console.log(myRole, typeof myRole);

// BigInt
// Represents integers with arbitrary precision, exceeding the limit of the Number type
const valueOfPi = BigInt("314159265358979323846");
console.log(valueOfPi, typeof valueOfPi);

const n = 74387539084n;
console.log(n, typeof n);


// Object
// Represents a collection of key-value pairs or properties.
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