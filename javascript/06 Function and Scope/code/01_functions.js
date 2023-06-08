function heyy(name, greetText3 = 'greetings from js') {
	console.log(greetText3 + ' ' + name);
	console.log(name + ' is nice person');
}

let name = 'david';
let name2 = 'alex';
let name3 = 'smith';
let name4 = 'andre';
let greetText3 = 'hello, morning';

heyy(name, greetText3);
heyy(name2);
heyy(name3, greetText3);
heyy(name4);


// return value from function
function sum(a, b, c) {
	let d = a + b + c;
	return d;
	// console.log(sum) (this line will never show, as lines is after return)
}

// for getting value in console, we can create a var and run console!
let rval = sum(2, 1, 4);
console.log(rval);

function product(a, b) {
	let c = a * b;
	return c;
}

let multiply = product(2, 9);
console.log(multiply);