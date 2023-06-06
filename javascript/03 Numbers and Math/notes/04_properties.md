# Number Properties
> JavaScript provides several number properties that can be accessed through the `Number` object. These properties hold specific numeric values and provide useful information or functionality related to numbers. Let's explore some commonly used number properties:

1. `Number.EPSILON`: The difference between 1 and the smallest number > 1.

```javascript
console.log(Number.EPSILON);        // 2.220446049250313e-1
```

> The `Number.EPSILON` property represents the smallest difference between two representable numbers greater than 1.

2. `Number.MAX_VALUE`: The largest number possible in JavaScript.

```javascript
console.log(Number.MAX_VALUE);       // 1.7976931348623157e+308
```

> The `Number.MAX_VALUE` property represents the maximum numeric value that JavaScript can handle.

3. `Number.MIN_VALUE`: The smallest number possible in JavaScript.

```javascript
console.log(Number.MIN_VALUE);       // 5e-324
```

> The `Number.MIN_VALUE` property represents the smallest positive numeric value that JavaScript can handle.

4. `Number.MAX_SAFE_INTEGER`: The maximum safe integer (2^53 - 1).

```javascript
console.log(Number.MAX_SAFE_INTEGER);    // Output: 9007199254740991
```

> The `Number.MAX_SAFE_INTEGER` property represents the maximum integer value that can be safely represented and compared in JavaScript.

5. `Number.MIN_SAFE_INTEGER`: The minimum safe integer (-(2^53 - 1)).

```javascript
console.log(Number.MIN_SAFE_INTEGER);    // Output: -9007199254740991
```

> The `Number.MIN_SAFE_INTEGER` property represents the minimum integer value that can be safely represented and compared in JavaScript.

6. `Number.POSITIVE_INFINITY`: Infinity (returned on overflow).

```javascript
console.log(Number.POSITIVE_INFINITY);   // Output: Infinity
```

> The `Number.POSITIVE_INFINITY` property represents positive infinity, which is returned when a number exceeds the maximum representable value.

7. `Number.NEGATIVE_INFINITY`: Negative infinity (returned on overflow).

```javascript
console.log(Number.NEGATIVE_INFINITY);   // Output: -Infinity
```

> The `Number.NEGATIVE_INFINITY` property represents negative infinity, which is returned when a number exceeds the minimum representable value.

8. `Number.NaN`: A "Not-a-Number" value.

```javascript
console.log(Number.NaN);                 // Output: NaN
```

>The `Number.NaN` property represents a value that is not a valid number.