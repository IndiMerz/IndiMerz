console.log(10 > 20 && 15 < 30);   // false
console.log(10 > 20 || 15 < 30);   // true


// && - returns first flasy value or last value
let x;

x = 10 && 20;  // 20
x = 10 && 20 && 30;  // 30
x = 10 && 0 && 30;  // 0
x = 10 && null && 30 && ''; // null
x = 10 && 15 && 30 && ''; // blank space

console.log(x);


const post = [];
console.log(post[0]); // undefined

// to solve this issue
post.length > 0 && console.log(post[0]); // it will show blank if ther's no post


// || - return the first truthy value or last value

let y;
y = 40 || 50;   // 40
y = 0 || 50;   // 50
y = 0 || 50 || 70;   // 50
y = 0 || '' || 70 || null;   // 70
y = 0 || '' || undefined || null;   // null

console.log(y);


// ?? - returns the right side operand when left is null or undefined, (doesnt checks for all falsy values)

let z;

z = 12 ?? 15;   // 12
z = 15 ?? 12;   // 15

z = 20 ?? null;   // 20
z = 20 ?? undefined;   // 20

z = 0 ?? undefined;   // 0
z = NaN ?? null;   // NaN
z = '' ?? null;   // blank space

z = null ?? 20;   // 20
z = undefined ?? 40;   // 40

z = null ?? undefined;   // undefined
z = undefined ?? null;   // null

console.log(z);



// logical assignment

// || - assigns the right side value only if left is falsy
let a = false;

if (!a) {
    a = 10;
}  // 10

// shorter way
a = a || 10  // 10
//or
a ||= 10  // 10

console.log(a);

// eg
let p = 10;
p = p || 30;
console.log(p);  // 10





// && - assign the right side value only if left is truthy value
let b = 20;

if (b) {
    b = 30;
}  // 30


// shorter way
b = b && 30;
//or
b &&= 30;
console.log(b);


//eg
let q = NaN;
q &&= 10
console.log(q);  // NaN


// ?? - assign the right side value only if left is null or undefined

let c = null;

if (c === null || c === undefined){
    c = 50
}  // 50

// shorter way
c = c ?? 50;
// or
c ??= 50;

console.log(c);


let r = false;
r ??= 10;
console.log(r);  // false