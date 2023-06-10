/* Flasy Values:
1. False
2. 0
3. Empty String ''
4. null
5. undefined
6. NaN
*/

// these all things are false
const x = '';
if (x) {
    console.log('This is Truthy');
} else {
    console.log('This is falsy');
}
console.log(Boolean(x));


const y = false;
if (y) {
    console.log('This is Truthy');
} else {
    console.log('This is falsy');
}
console.log(Boolean(y));


const z = 0;
if (z) {
    console.log('This is Truthy');
} else {
    console.log('This is falsy');
}
console.log(Boolean(z));

// Truthy values
/* eg.
- everything else which is not falsy
- true
- '0'
- 'false'
- ' '  space in string
- []  empty array
- {}  empty object
- function () {}  empty fn
*/

const a = '0';
if (a) {
    console.log('This is Truthy');
} else {
    console.log('This is falsy');
}
console.log(Boolean(a));


const b = {};
if (b) {
    console.log('This is Truthy');
} else {
    console.log('This is falsy');
}
console.log(Boolean(b));


const c = ' ';
if (c) {
    console.log('This is Truthy');
} else {
    console.log('This is falsy');
}
console.log(Boolean(c));



// truthy and falsy cavets

const noOfCars = 0;
if (noOfCars) {
    console.log(`You have ${noOfCars} car`);
} else {
    console.log('Please enter No. of Cars you Own');
} // Please enter No. of Cars you Own


// if someone doesnt own any car, this will through an error as 0 is falsy
// to fix it, we can use '!isNan' before variable dec or  '!== undefine'

if (noOfCars !==undefined) {
    console.log(`You have ${noOfCars} car`);
} else {
    console.log('Please enter No. of Cars you Own');
} // You have 0 car


if (!isNaN(noOfCars)) {
    console.log(`You have ${noOfCars} car`);
} else {
    console.log('Please enter No. of Cars you Own');
} // You have 0 car


// checking for empty arrays
const post = [];
if (post.length > 0) {
    console.log('List of posts');
} else {
    console.log('There is no post');
}

// checking for empty object
const user = {}

if (Object.keys(user).length > 0) {
    console.log('List of users');
} else {
    console.log('There is no user');
}

// loose equality (==), all will give true
console.log(false == 0);  
console.log('' == 0);  
console.log(null == undefined);  