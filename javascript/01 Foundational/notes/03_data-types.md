# Data Types
> JavaScript has several built-in data types that are used to store and manipulate different kinds of values. Understanding these data types is essential for writing effective JavaScript code. Let's explore the different data types in JavaScript.

## Primitive Types
> Primitive types are the fundamental or basic data types in JavaScript. They are immutable, meaning their values cannot be changed once they are created. The primitive types in JavaScript are:

- **`String`**: Represents a sequence of characters enclosed in single ('') or double ("") quotes.

1. **`Number`**: Represents numeric values, including integers and floating-point numbers.

2. **`Boolean`**: Represents a logical value of either `true` or `false`.

3. **`Null`**: Represents the intentional absence of any object value.

4. **`Undefined`**: Represents a variable that has been declared but has not been assigned a value.

5. **`Symbol`**: Represents a unique identifier, used typically as keys in object properties.

6. **`BigInt`**: Represents integers with arbitrary precision, exceeding the limit of the Number type.


> Primitive types are stored directly in memory and are compared by their value. When you assign a primitive value to a variable or pass it as an argument, a copy of the value is created.


## Reference Types
> Reference types, also known as `objects`, are more complex data types. They can hold multiple values and have properties and methods. Reference types are mutable, meaning their values can be modified after they are created. The reference types in JavaScript include:

- **`Object`**: Represents a collection of key-value pairs or properties.

- **`Array`**: Represents an ordered list of values.

- **`Function`**: Represents a reusable block of code.

> Reference types are stored in memory, and variables of reference types hold references or pointers to the memory location where the actual values are stored. When you assign a reference type to a variable or pass it as an argument, you are working with a reference to the value in memory, rather than a direct copy of the value.


## Examples

```javascript

// String
const firstName = 'henry';
console.log(firstName, typeof firstName); // henry, string

// Number
const age = 27;

// Boolean
const hasWon = false; 
console.log(hasWon, typeof hasWon);  // false, boolean


// Null
const pinCode = null;


// Undefined
let achievement;


// Symbol
const myRole = Symbol('developer');


// BigInt
const valueOfPi = BigInt("314159265358979323846");
const x = 74387539084n;

// Object
const oddNumber = [1, 3, 5, 7, 9];
console.log(oddNumber, typeof oddNumber); // [ 1, 3, 5, 7, 9 ], object


const employee = {
    name: 'henry',
    age: 30,
}
console.log(employee, typeof employee); // { name: 'henry', age: 30 }, object


const currentDate = new Date();
console.log(currentDate, typeof currentDate);


function getNum(){
    // code for function here
}

```

> This Markdown document provides an overview of JavaScript data types, explaining both primitive types and reference types. It includes examples that demonstrate the usage of each data type with variable declarations and assignments. The code snippet can be copied and executed in a JavaScript environment to observe the behavior and output of each data type.