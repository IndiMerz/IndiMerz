// number methods can be used on all JavaScript numbers
let a;
let b;
let result;


// 1. toString() :	Returns a number as a string
a = 45;
result = a.toString();
console.log(result, typeof result);   // 45 string

/* 
By using toString() method with the appropriate radix (base) parameter, we can convert numbers to different bases such as binary, hexadecimal, and octal.

The default base value used by the toString() method in JavaScript is 10, which represents the decimal system.
*/

// a. Binary
a = 425;
result = a.toString(2);
console.log(result);     // 110101001

// b. Octal
a = 742;
result = a.toString(8);
console.log(result);     // 1346

// c. Hexadecimal
a = 8134;
result = a.toString(16);
console.log(result);     // 1FC6


// 2. toFixed()	: Returns a number written with specified number of decimals
a = 76.9363;
result = a.toFixed(2);
console.log(result);     // 76.94


// 3. toPrecision()	: Returns a number written with a specified length
a = 76.9363;
result = a.toPrecision(3);
console.log(result);     // 76.9


// 4. toExponential() : Returns a number written in exponential notation
a = 83.54;
result = a.toExponential(3);
console.log(result);     // 8.354e+1


// 5. ValueOf() : Returns a number as a number
// This method is used internally in JavaScript to convert Number objects to primitive values.
a = new Number(64.75) ;
result = a.valueOf();
console.log(result);     // 64.75


// 6. toLocaleString() : used to convert a number to a string representation using the locale-specific formatting rules.
a = 54384.329

console.log(a.toLocaleString());             // 54,384.329
console.log(a.toLocaleString('en-US'));      // 54,384.329
console.log(a.toLocaleString('de-DE'));      // 54.384,329
console.log(a.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // $54,384.33
console.log(a.toLocaleString('en-US', { style: 'currency', currency: 'INR' })); // ₹54,384.33