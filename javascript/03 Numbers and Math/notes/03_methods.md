### Number Methods
> JavaScript provides several methods that can be used on all numbers. These methods allow you to perform various operations and transformations on numbers.

1. `toString()`: Returns a number as a string.

```javascript
let a = 45;
let result = a.toString();
console.log(result, typeof result);   // 45 string
```

> The `toString()` method can also be used to convert numbers to different bases such as binary, hexadecimal, and octal by specifying the radix parameter.

a. Binary:
```javascript
let a = 425;
let result = a.toString(2);
console.log(result);     // 110101001
```

b. Octal:
```javascript
let a = 742;
let result = a.toString(8);
console.log(result);     // 1346
```

c. Hexadecimal:
```javascript
let a = 8134;
let result = a.toString(16);
console.log(result);     // 1FC6
```

2. `toFixed()`: Returns a number written with a specified number of decimals.

```javascript
let a = 76.9363;
let result = a.toFixed(2);
console.log(result);     // 76.94
```

3. `toPrecision()`: Returns a number written with a specified length.

```javascript
let a = 76.9363;
let result = a.toPrecision(3);
console.log(result);     // 76.9
```


4. `toExponential()`: Returns a number written in exponential notation.

```javascript
let a = 83.54;
let result = a.toExponential(3);
console.log(result);     // 8.354e+1
```


5. `valueOf()`: Returns a number as a number.

```javascript
let a = new Number(64.75);
let result = a.valueOf();
console.log(result);     // 64.75
```


6. `toLocaleString()`: Used to convert a number to a string representation using the locale-specific formatting rules.

```javascript
let a = 54384.329;

console.log(a.toLocaleString());             // 54,384.329
console.log(a.toLocaleString('en-US'));      // 54,384.329
console.log(a.toLocaleString('de-DE'));      // 54.384,329
console.log(a.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // $54,384.33
console.log(a.toLocaleString('en-US', { style: 'currency', currency: 'INR' })); // ₹54,384.33
```