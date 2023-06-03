let x;
let y;
let z;
let result;

// 1. JavaScript has only one type of number. Numbers can be written with or without decimals.
// The maximum number of decimals is 17
x = 5;
y = 7.3;


// 2.  Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
x = 999999999999999        // accurate
y = 878396226626737527672  // 878396226626737500000,  not accurate 


// 3. JavaScript Numbers are Always 64-bit Floating Point
// Floating point arithmetic is not always 100% accurate:

x = 0.1 + 0.2;                    // 0.30000000000000004
y = (0.2 * 10 + 0.1 * 10) / 10;   // 0.3


// 4. Adding Numbers and Strings
// JavaScript uses the + operator for both addition and concatenation.


// add
x = 5;
y=  7;
result = x + y;  // 12

// concatenate
x ='4';
y = 53;
result = x + y; // 453

x ='4';
y = 53;
z = 43;
result = x + y + z; // 45343

x = 4;
y = 53;
z = '43';
result = x + y + z; // 45343


// 5. Numeric Sting
// JavaScript will try to convert strings to numbers in all numeric operations.

x = '5';
y = '5';
result = x * y;  // 25

x = '6';
y = '3';
result = x - y;  // 3

x = '2';
y = '4';
result = x / y;  // 0.5

x = '8';
y = '7';
result = x % y;  // 1

// This will not work
x = '8';
y = '7';
result = x + y;  //87


// 6. NaN - Not a Number
//Trying to do arithmetic with a non-numeric string will result in NaN
x = 8;
y = 'Apple';
result = x * y;  // NaN

x = NaN;
y = 2;
result = x + y;  // NaN

x = NaN;
y = '8';
result = x + y;  // NaN8



console.log(result);


// 7. Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

// Operation with Infinity

// All results will give Infinity
x = Infinity;
y = 7;

console.log(`
sum = ${x+y}
sub = ${x-y}
product = ${x*y}
divide = ${x/y}
`);

// sub and divide will give NaN, rest infinity
x = Infinity;
y = Infinity;

console.log(`
sum = ${x+y}
sub = ${x-y}  
product = ${x*y}
divide = ${x/y}
`);


// Comparisons with Infinity

console.log(Infinity > 1000);           // true
console.log(Infinity < -500);           // false
console.log(Infinity === Infinity);     // true
console.log(NaN === Infinity);          // false


console.log(1 / 0);  //  Infinity
console.log(0 / 0);  //  NaN



// -Infinity
console.log(-Infinity - Infinity);      // -Infinity;
console.log(-Infinity - (-Infinity));   //  NaN
console.log(-10/0);                     // -Infinity

console.log(-Infinity + 5);             // -Infinity
console.log(-Infinity - 10);            // -Infinity
console.log(-Infinity * 2);             // -Infinity
console.log(-Infinity / 3);             // -Infinity

console.log(-Infinity > -1000);         // false
console.log(-Infinity < -500);          // true
console.log(-Infinity === -Infinity);   // true
console.log(NaN === -Infinity);         // false




// 8. Numbers as Objects
// Numbers can also be defined as objects with the keyword 'new'

y = new Number(123);
console.log(y, typeof y);   // object


// Comparing two JavaScript objects always returns false.
x = new Number(500);
y = new Number(500);
console.log(x==y);  // False

x = new Number(500);
y = new Number(500);
console.log(x===y);  // False

x = 500;
y = new Number(500);
console.log(x===y);  // False

x = 500;
y = new Number(500);
console.log(x==y);  // True


// 9. Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x
x = 0xFF;
console.log(x);  // 255