# Numbers
> In JavaScript, numbers are a fundamental data type used to represent numeric values. They are used for various **mathematical calculations**, **storing quantities**, and p**erforming arithmetic operations**.

- JavaScript has only one type of number, which can be written ***with or without decimals***.
- The maximum number of decimals that can be accurately represented is `17`.
- JavaScript numbers are always ***64-bit floating-point*** numbers, represented as floating-point values.
  
## Number Creation
> You can create numbers in JavaScript using `number literals` or the `Number constructor`

```js
let x = 5;                // Number literal
let y = 7.3;              // Number literal

let z = new Number(42);   // Number object created with the Number constructor
```

## Arithmetic Operations
> JavaScript provides various arithmetic operators for performing calculations with numbers, including `addition` (+), `subtraction` (-), `multiplication` (*), `division` (/), and more. These operators can be used to perform mathematical calculations with numbers.

```js
let result;

result = 10 + 5;           // Addition
result = 10 - 5;           // Subtraction
result = 10 * 5;           // Multiplication
result = 10 / 5;           // Division
result = 10 % 3;           // Modulo (Remainder)
result = 10 ** 3;          // Exponentiation
```

## Number and String Operations
> JavaScript uses the `+` operator for both `addition` and `string concatenation`. When adding numbers and strings together, JavaScript will try to convert the values into strings and concatenate them.

```js
let result = 5 + 7;        // Addition
result = '4' + 53;        // Concatenation: "453"
result = '4' + 53 + 43;   // Concatenation: "45343"
result = 4 + 53 + '43';   // Concatenation: "5743"
```

> When performing arithmetic operations on strings that represent numeric values, JavaScript will try to convert the strings to numbers.

```js
let result = '5' * '5';   // Multiplication: 25
result = '6' - '3';      // Subtraction: 3
result = '2' / '4';      // Division: 0.5
result = '8' % '7';      // Modulo: 1
```

> However, if a non-numeric string is used in an arithmetic operation, the result will be NaN (Not-a-Number).

```js
let result;

result = 8 * 'Apple';       // NaN
result = NaN + 2;           // NaN
result = NaN + '8';         // NaN8
```


## Infinity
> Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

### Operations with Infinity


```javascript

// Positive Infinity : 

// All results will give Infinity
let sum = Infinity + 7;
let sub = Infinity - 7;
let product = Infinity * 7;
let divide = Infinity / 7;


sum = Infinity + Infinity;      // Infinity
product = Infinity * Infinity;  // Infinity
sub = Infinity - Infinity;      // NaN
divide = Infinity / Infinity;   // NaN


// Negative Infinity

// All results will give -Infinity
let sumNegInfinity = -Infinity + 5;
let subNegInfinity = -Infinity - 10;
let mulNegInfinity = -Infinity * 2;
let divNegInfinity = -Infinity / 3;

sumNegInfinity = -Infinity + -Infinity;        // -Infinity
mulNegInfinity = -Infinity * -Infinity;        // Infinity
subNegInfinity = -Infinity - -Infinity;        // NaN
divNegInfinity = -Infinity / -Infinity;        // NaN

```

### Comparisons with Infinity

```js

// Positive Infinity
let greaterThan = Infinity > 1000;        // true
let lessThan = Infinity < -500;           // false
let equal = Infinity === Infinity;        // true
let notEqual = NaN === Infinity;          // false


// Negative Infinity
let negInfinityGreaterThan = -Infinity > -1000;      // false
let negInfinityLessThan = -Infinity < -500;          // true
let negInfinityEqual = -Infinity === -Infinity;      // true
let negInfinityNotEqual = NaN === -Infinity;         // false

```

#### Special Case
```js
let divPosInfinity = 1 / 0;             // Infinity
let divNegInfinity =  -1 / 0;           // -Infinity
let divZeroByZero = 0 / 0;              // NaN

```

## Numbers as Objects
> Numbers can also be defined as objects using the Number constructor. However, comparing two number objects using the `==` or `===` operators will always return `false`.

```js
let x = new Number(500);
let y = new Number(500);
console.log(x == y);     // false
console.log(x === y);    // false

```

## Hexadecimal Numbers
> JavaScript interprets numeric constants as `hexadecimal` if they are preceded by `0x`.

```JS
let x = 0xFF;       // 255
```