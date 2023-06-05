// 1. Arithmetic Operators: Perform mathematical calculations.

let x = 8;
let y = 5;
// Addition 
console.log(x + y);
// Subtraction
console.log(x - y);
// Multiplication
console.log(x * y);
// Division
console.log(x / y);
// Modulus
console.log(x % y);
// Exponential
console.log(x**y);


// Increment and Decrement

// Post Increment
let num = 5;
let result = num++;
console.log(num);      // Output: 6 (x is incremented)
console.log(result); // Output: 5 (original value of x before increment)

// Pre Increment
let num2 = 5;
let result2 = ++num2;
console.log(num2);      // Output: 6 (x is incremented)
console.log(result2); // Output: 6 (updated value of x after increment)


// Post Decrement
let gum1 = 5;
let value1 = gum1--;
console.log(x);      // Output: 4 (x is decremented)
console.log(value1); // Output: 5 (original value of x before decrement)

// Pre Decrement
let gum2 = 5;
let value2 = --gum2;
console.log(x);      // Output: 4 (x is decremented)
console.log(value2); // Output: 4 (updated value of x after decrement)



// 2. Comparison Operators: Compare values and return a boolean result.

// Equal to (loose equality)
console.log(5 == '5'); // true
// Equal to (strict equality)
console.log(2 === '2'); // false
// Not Equal to (loose inequality)
console.log(3 != 4);  
// Not Equal to (strict inequality)
console.log(2 !== 3);
// Strict greater than
console.log(6 > 5); 
// Strict less than
console.log(2 < 5); 
// Greater than or equal to
console.log(2 >= 1); 
// Less than or equal to
console.log(4 <= 7);



// 3. Assignment Operators: Assign values to variables.

let assign = 10;

assign += 3;
console.log(assign); // Output: 13

assign -= 3;
console.log(assign); // Output: 10

assign *= 2; 
console.log(assign); // Output: 20

assign /= 2; 
console.log(assign); // Output: 10

assign %= 8; 
console.log(assign); // Output: 2



// 4. String Concatination
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);



// 5. Logical Operators
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin); // Output: false (both conditions must be true)
console.log(isLoggedIn || isAdmin); // Output: true (either condition is true)
console.log(!isLoggedIn);           // Output: false (negation of isLoggedIn)



// 6. Ternary Operators
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message); // Output: "You are an adult"