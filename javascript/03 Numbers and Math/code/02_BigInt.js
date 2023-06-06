// Create a BigInt

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