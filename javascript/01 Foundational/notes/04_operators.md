# Operators in JavaScript
> Operators in JavaScript are `symbols` or `keywords` used to perform operations on values or variables. They allow you to `manipulate`, `compare`, and `combine` values, and perform various logical and mathematical operations. 

*Here are some commonly used operators in JavaScript:*

1. ## Arithmetic Operators

> Arithmetic operators perform mathematical calculations and are used to perform arithmetic operations such as `addition`, `subtraction`, `multiplication`, `division`, and more.

Examples:

```js
let x = 10;
let y = 5;

console.log(x + y);  // Output: 15
console.log(x - y);  // Output: 5
console.log(x * y);  // Output: 50
console.log(x / y);  // Output: 2
console.log(x % y);  // Output: 0 (remainder)
```

### Increment and Decrement
>Increment and decrement are arithmetic operations used to increase or decrease the value of a variable by a specific amount, usually 1.

```js
// Post Increment
let num = 5;
let result = num++;
console.log(num);      // Output: 6 (x is incremented)
console.log(result); // Output: 5 (original value of x before increment)

// Pre Increment
let num2 = 5;
let result2 = ++num2;
console.log(num2);      // Output: 6 (x is incremented)
console.log(result2); // Output: 6 (updated value of x after increment)


// Post Decrement
let gum1 = 5;
let value1 = gum1--;
console.log(x);      // Output: 4 (x is decremented)
console.log(value1); // Output: 5 (original value of x before decrement)

// Pre Decrement
let gum2 = 5;
let value2 = --gum2;
console.log(x);      // Output: 4 (x is decremented)
console.log(value2); // Output: 4 (updated value of x after decrement)

````
  

2. ## Assignment Operators
> Assignment operators are used to assign values to variables. They include the simple assignment operator (=) as well as compound assignment operators such as +=, -=, *=, and more.

Examples:

```js
let x = 10;

x += 5;             // Equivalent to: x = x + 5
console.log(x);     // Output: 15

x -= 3;             // Equivalent to: x = x - 3
console.log(x);     // Output: 12

x *= 2;             // Equivalent to: x = x * 2
console.log(x);     // Output: 24

x /= 2;             // Equivalent to: x = x / 2
console.log(x);     // Output: 12

x %= 8;             // Equivalent to: x = x % 8
console.log(x);     // Output: 4
```


3. ## Comparison Operators

> Comparison operators are used to compare values and return a boolean result (true or false). They are used in conditional statements and loops to determine the flow of the program.

Examples:

```js
let x = 5;
let y = 10;

console.log(x == y);   // Output: false
console.log(x === y);  // Output: false
console.log(x != y);   // Output: true
console.log(x !== y);  // Output: true
console.log(x > y);    // Output: false
console.log(x < y);    // Output: true
console.log(x >= y);   // Output: false
console.log(x <= y);   // Output: true

```

4. ## Logical Operators
> Logical operators are used to combine or negate boolean values. They are typically used in conditional statements to make decisions based on multiple conditions.

Examples:

```js
let x = 10;
let y = 5;

console.log(x > 5 && y < 10);    // Output: true (logical AND)
console.log(x > 5 || y > 10);    // Output: true (logical OR)
console.log(!(x === y));         // Output: true (logical NOT)

```

5. ## Ternary Operator
> The ternary operator, also known as the `conditional operator`, is a shorthand way to write conditional statements. It takes three operands and returns a value based on a condition.

*condition ? expression1 : expression2*

Example:

```js
const x = 10;
const result = (x > 5) ? "Greater than 5" : "Less than or equal to 5";
console.log(result);   // Output: "Greater than 5"

```
