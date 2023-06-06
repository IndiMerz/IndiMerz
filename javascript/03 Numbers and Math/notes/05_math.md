# Math Object
> Math is a built-in object in JavaScript that provides mathematical functions and constants for performing common mathematical operations.

 1. `Math.abs(x)`: Returns the absolute value of x.

 Example:
```javascript
let absolute = Math.abs(-5); // Output: 5
let absolute = Math.abs(5); // Output: 5
```

 2. `Math.ceil(x)`: Rounds a number up to its nearest integer.

 Example:
```javascript
let roundUp = Math.ceil(2.53); // Output: 3
let roundUp = Math.ceil(2.46); // Output: 3
```

 3. `Math.floor(x)`: Rounds a number down to its nearest integer.
 
 Example:
```javascript
let roundDown = Math.floor(12.53); // Output: 12
let roundDown = Math.floor(12.46); // Output: 12
```

 4. `Math.round(x)`: Rounds a number to its nearest integer.

 Example:
```javascript
let roundOff = Math.round(2.53); // Output: 3
let roundOff = Math.round(2.46); // Output: 2
```

 5. `Math.trunc(x)`: Removes the decimal part of a number without rounding.
  
 Example:
```javascript
let rmDecimal = Math.trunc(0.953); // Output: 0
let rmDecimal = Math.trunc(6.486); // Output: 6
```

 6. `Math.sign(x)`: Returns the sign of a number.

 Example:
```javascript
let sign1 = Math.sign(-4); // Output: -1
let sign2 = Math.sign(0); // Output: 0
let sign3 = Math.sign(12); // Output: 1
```

 7. `Math.sqrt(x)`: Returns the square root of a number.
   
 Example:
```javascript
let root = Math.sqrt(9); // Output: 3
```

 8. `Math.pow(x, y)`: Returns the value of x raised to the power of y.

 Example:
```javascript
let power = Math.pow(3, 4); // Output: 81
```

 9. `Math.min()` and `Math.max()`: Find the lowest and highest values in a list of arguments.

 Example:
```javascript
let minNum = Math.min(0, 90, 309, 17, -38, -170, 84, -42); // Output: -170

let maxNum = Math.max(0, 90, 309, 17, -38, -170, 84, -42); // Output: 309
```

 10. `Math.random()`: Generates a random number between 0 to 1

 Example:
```javascript
let randomNum = Math.random();
```

## Generating Random Numbers within a Range
> To generate random numbers within a specific range, you can use `Math.random()` along with other mathematical functions.

 Example:
```javascript
// Random Number From 0 to 10
let zeroTo10 = Math.floor(Math.random() * 11);

// Random Number From 0 to 99
let zeroTo99 = Math.floor(Math.random() * 100);

// Random Number From 1 to 100
let zeroTo100 = Math.floor(Math.random() * 100) + 1;
```

## A Proper Random Function
> The following functions provide a proper way to generate random numbers within a specified range:

```javascript
// This function always returns a random number between min (included) and max (excluded)
const getRandomNum1 = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

// This function always returns a random number between min and max (both included)
const getRandomNum2 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

```