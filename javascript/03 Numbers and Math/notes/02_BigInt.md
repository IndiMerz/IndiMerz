# BigInt
> In JavaScript, BigInt is used for representing arbitrarily large integers that exceed the safe integer limit.

## JavaScript's safe integer range is as follows:

- **`Up to`**: 9007199254740991 (2^53 - 1)
- **`Down to`**: -9007199254740991 (-(2^53 - 1))

> Integer values outside this range will lose precision if represented as regular numbers.


## Creating a BigInt
> You can use either the `n` suffix or the `BigInt()` function.

```js
const bigNum1 = 123456789012345678901234567890n;   // 123456789012345678901234567890n

const bigNum2 = BigInt("567532256158978251456784743");  // 567532256158978251456784743n

```

## BigInt values support various arithmetic operators just like regular numbers.

```js 
let x = 15n;
let y = 10n;
let result;

result = x * y;   // 150n
result = x - y;   // 5n
result = x + y;   // 25n
result = x / y;   // 1n (BigInt cannot have decimals)
result = x % y;   // 5n
result = x ** y;  // 576650390625n

console.log(result);
```
