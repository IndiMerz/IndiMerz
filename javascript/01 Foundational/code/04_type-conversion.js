// Convert String to Number
let value = '100';
// Ways to convert
value = parseInt(value);
value = Number(value);
value = +value;
console.log(value, typeof value);


// Convert string to decimal
let price = '76.3';
// Ways to convert
price = parseFloat(price);
console.log(price, typeof price);


// Convert Number to String
let amount = 150;
// Ways to convert
amount = amount.toString();
amount = String(amount);
console.log(amount, typeof amount);


// Convert Number to Boolean
let a = 0;
// Ways to convert
a = Boolean(a);
console.log(a, typeof a);


// NaN
console.log(Math.sqrt(-2));
console.log(1 + NaN);
console.log(undefined + undefined);

let notANumber = 'hello';
notANumber = Number(notANumber);
console.log(notANumber, typeof notANumber);