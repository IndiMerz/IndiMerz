# Type Conversion and Coercion

> Type conversion refers to intentionally changing the data type of a value from one type to another using built-in functions or operators provided by JavaScript. 
> It includes both `implicit (coercion)` and `explicit` type conversions.


# Implicit Conversion
> Implicit coercion, also known as `type coercion`, is the automatic type conversion that occurs when JavaScript tries to perform operations or evaluations involving values of different data types.


- ## String and Number Concatenation
> When a string and a number are concatenated using the `+` operator, the number is coerced into a string and then concatenated.

Example:
```javascript
let num = 10;
let str = "The number is: " + num;
console.log(str);  // Output: "The number is: 10"
```

- ## Addition with Strings and Numbers
> JavaScript performs type coercion when adding strings and numbers. The behavior depends on the context and the types involved.

Example:
```js
console.log(5 + '10');           // Output: "510"
console.log(4 + Number('10'));   // Output: 14
console.log('10' - 5);           // Output: 5
console.log(10 * '5');           // Output: 50
console.log(3 + null);           // Output: 3
console.log(4 + undefined);      // Output: NaN
console.log(8 + true);           // Output: 9
console.log(7 + false);          // Output: 7

```

## Logical Operators with Different Types
> JavaScript performs type coercion when using logical operators with different types of values.

Example:
```js
console.log(0 && "Hello");    // Output: 0
console.log("" || "Hi");      // Output: "Hi"

```

## Numeric Comparison
> When comparing values of different types, JavaScript coerces the values to the same type before making the comparison.

Example:
```js
let number = 10;
let string = "5";
console.log(number > string);  // true (Coerces "5" to number and compares 10 > 5)
```


## Coercion in Equality Comparison
>JavaScript performs type coercion when using equality operators (== and !=) to compare values of different types.

Example:
```js
console.log("10" == 10);            // true
console.log(null == undefined);     // true
console.log(0 == false);            // true
```


# Explicit Conversion
> Explicit type conversion, also known as `type casting`, is when you intentionally convert a value from one type to another using `built-in functions` or `operator`s.


- ## Conversion to Number
> To convert a value to a number, you can use functions like `parseInt()`, `parseFloat()`, or the unary plus operator `('+')`.

Example:
```js
let value = '100.4';  // String

value = parseInt(value);
console.log(value);  // 100

value = Number(value);
console.log(value);  // 100

value = +value;
console.log(value);  // 100

value = parseFloat(value);
console.log(price);  // 100.4
```


- ## Conversion to String
> To convert a value to a string, you can use the `toString()` method or the `String()` function.

Example:
```js
let amount = 150;  // Number

amount = amount.toString();
console.log(amount);  // '150'

amount = String(amount);
console.log(amount);  // '150'
```

- ## Conversion to Boolean

> To convert a value to a boolean, you can use the `Boolean()` function.

Example:
```js
let a = 0;  // Number
let b = 1;  // Number

a = Boolean(a);
console.log(a);  // Output: false

b = Boolean(b);
console.log(b);  // Output: true

```

- ## Converting Non-numeric Strings to Numbers
> When converting `non-numeric` strings to numbers, the result will be `NaN`.

Example:
```js
let notANumber = 'hello';  // String

notANumber = Number(notANumber);
console.log(notANumber);  // Output: NaN

```