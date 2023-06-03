// Math is a built-in object in JavaScript that provides mathematical functions and constants for performing common mathematical operations

// 1.  Math.abs(x) : Returns the absolute value of a x
console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(5)); // Output: 5


// 2. Math.ceil(x): Rounded up to its nearest integer
console.log(Math.ceil(2.53)); // 3
console.log(Math.ceil(2.46)); // 3


// 3. Math.floor(x) : Rounded down to its nearest integer
console.log(Math.floor(12.53)); // 12
console.log(Math.floor(12.46)); // 12


// 4. Math.round(x) : Rounded to its nearest integer
console.log(Math.round(2.53)); // 3
console.log(Math.round(2.46)); // 2


// 5.  Math.trunc(x) : Removes decimal without rounding
console.log(Math.trunc(0.953)); // 0
console.log(Math.trunc(6.486)); // 6


// 6. Math.sign(x) : Returns the sign of a number
//    (1 for positive, -1 for negative, 0 for zero)
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(12)); // 1


// 7. Math.sqrt(x) : Returns the square root of x:
console.log(Math.sqrt(9)); // 3


// 8. Math.pow(x, y) : Returns the value of x to the power of y
console.log(Math.pow(3, 4)); // 81


// 9. Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(0, 90, 309, 17, -38, -170, 84, -42)); // -170
console.log(Math.max(0, 90, 309, 17, -38, -170, 84, -42)); // 309


// 10. Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());

// Random Number From 0 to 10
console.log(Math.floor(Math.random() * 11));

// Random Number From 0 to 99
console.log(Math.floor(Math.random() * 100));

// Random Number From 1 to 100
console.log(Math.floor(Math.random() * 100) + 1);


// A Proper Random Function

// This function always returns a random number between min (included) and max (excluded)
const getRandomNum1 = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomNum1(1,4)); 

// This JavaScript function always returns a random number between min and max (both included)
const getRandomNum2 = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNum2(1,4));