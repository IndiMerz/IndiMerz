// Naming should start by UpperCase

function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
	this.area = function () {
		return this.width * this.height;
	};
}

const rectangle1 = new Rectangle('rectangle 1', 30, 40);
console.log(rectangle1.name, rectangle1.width, rectangle1.height, rectangle1.area());

const rectangle2 = new Rectangle('rectangle 2', 10, 30);
console.log(rectangle2.name, rectangle2.width, rectangle2.height, rectangle2.area());

const rectangle3 = new Rectangle('rectangle 3', 20, 10);
console.log(rectangle3.name, rectangle3.width, rectangle3.height, rectangle3.area());

const rectangle4 = new Rectangle('rectangle 4', 50, 25);
console.log(rectangle4.name, rectangle4.width, rectangle4.height, rectangle4.area());

const rectangle5 = new Rectangle('rectangle 5', 15, 35);
console.log(rectangle5.name, rectangle5.width, rectangle5.height, rectangle5.area());


/*

1. A new empty object is created
2. The constructor function is called with the arugents that we passsed in
3. The `this` keyword is set to the empty string
4. The new object is returned from the constructor function

 */
 


// Built-in Constructors

// string
const strLit = 'Hello'
const strObj = new String('Javascript');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing
//javascript puts a wrapper on the string for making it uppercase
console.log(strLit.toUpperCase());
console.log(strLit[2]);


// Unboxing 
console.log(strObj.valueOf(), typeof strObj.valueOf());

// constructor
console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String); // false (it is not an object)
console.log(strObj instanceof String); // true

// Number 
const numLit = 15;
const numObj = new Number(15);

console.log(numLit, typeof numLit); // number
console.log(numObj, typeof numObj);  // object

// boolean
const boolLit = true;
const boolObj = new Boolean(false)

console.log(boolLit, typeof boolLit); // boolean
console.log(boolObj, typeof boolObj);  // object

// arrray
const arrLit = [2, 4, 5, 3, 6];
const arrObj = new Array(2, 4, 5, 3, 6)

console.log(arrLit, typeof arrLit); // object
console.log(arrObj, typeof arrObj);  // object

// Function
const funLit = (m) => {
    return m**m
}
console.log(funLit(4));
console.log(funLit, typeof funLit);  // function (a special type of object)

const funObj = new Function('m', 'return m*m')
console.log(funObj(3));
console.log(funObj, typeof funObj);


// Objects
const obj1 = {};
// if we make empty literal, js will make it like this:
const obj2 = new Object();

console.log(obj1, typeof obj1); // object
console.log(obj2, typeof obj2); // object