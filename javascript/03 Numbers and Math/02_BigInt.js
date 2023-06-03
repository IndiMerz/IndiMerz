// BigInt used for representing arbitrarily large integers.


/*
JavaScript can only safely represent integers:

Up to:    9007199254740991 +(253-1)
Down to: -9007199254740991 -(253-1).

Integer values outside this range lose precision.
*/


// Create a BigInt

// To create a BigInt, use the 'n' suffix or the BigInt() function.

const bigNum1 = 123456789012345678901234567890n;
const bigNum2 = BigInt("123456789012345678901234567890");

console.log(bigNum1, typeof bigNum1);


// BigInt Operators
let x;
let y;
let result;

x = 15n;
y = 10n;

result = x*y;   // 150n
result = x-y;   // 5n
result = x+y;   // 25n
result = x/y;   // 1n (A BigInt can not have decimals)
result = x%y;   // 5n
result = x**y;  // 576650390625n


console.log(result);