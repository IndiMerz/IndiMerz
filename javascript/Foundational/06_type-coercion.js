/* Coercion refers to the automatic type conversion that occurs when JavaScript tries to perform operations or evaluations involving values of different data types.

Coercion is often referred to as implicit type conversion.

*/

// 1. String and Number Concatenation:
let num = 10;
let str = "The number is: " + num;
console.log(str);



// 2. Addition with Strings and Numbers:
console.log(5 + '10');           // Output 510
console.log(4 + Number('10'));   // Output 14
console.log('10' - 5);           // Output 5
console.log(10 * '5');           // Output 50
console.log(3 + null);           // Output 3
console.log(4 + undefined);      // Output NaN
console.log(8 + true);           // Output 9
console.log(7 + false);          // Output: 7



// 3. Logical Operators with Different Types:
console.log(0 && "Hello");    // Output: 0
console.log("" || "Hi");      // Output: "Hi"


// 4. Numeric Comparison
let number = 10;
let string = "5";
console.log(number > string); // Output: true (Coerces "5" to number and compares 10 > 5)


// 5. Coercion in Equality Comparison: It wont work in strict equality
console.log("10" == 10);            // Output: true
console.log(null == undefined);     // Output: true
console.log(0 == false);            // Output: true
