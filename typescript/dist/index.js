"use strict";
// Basic Types
const id = 10;
const profession = 'developer';
const isActive = true;
// any can be converted to any type later
let random = 'hello';
random = false;
// Arrays
const arr = [1, 2, 3, 4, 5];
const arr2 = ['car', 'bike', 'truck'];
const arr3 = [3, 5, 'car', false, 'motor'];
// Tuple (it should be in same order)
const bio = ['Travis', 25, true];
// Tuple Array
let employee;
employee = [
    [1, 'mike'],
    [2, 'clark'],
    [3, 'ben'],
    [4, 'adam'],
    [5, 'jason']
];
// Union
let productID;
productID = 12;
productID = 'new';
// Enum
var Dir1;
(function (Dir1) {
    Dir1[Dir1["Up"] = 0] = "Up";
    Dir1[Dir1["Down"] = 1] = "Down";
    Dir1[Dir1["Left"] = 2] = "Left";
    Dir1[Dir1["Right"] = 3] = "Right";
})(Dir1 || (Dir1 = {}));
console.log(Dir1.Up); // 0
console.log(Dir1.Down); // 1
console.log(Dir1.Left); // 2
console.log(Dir1.Right); // 3
var Dir2;
(function (Dir2) {
    Dir2[Dir2["Up"] = 1] = "Up";
    Dir2[Dir2["Down"] = 2] = "Down";
    Dir2[Dir2["Left"] = 3] = "Left";
    Dir2[Dir2["Right"] = 4] = "Right";
})(Dir2 || (Dir2 = {}));
console.log(Dir2.Up); // 1
console.log(Dir2.Down); // 2
console.log(Dir2.Left); // 3
console.log(Dir2.Right); // 4
// we can also set string in enum
var Dir3;
(function (Dir3) {
    Dir3["Up"] = "Up";
    Dir3["Down"] = "Down";
    Dir3["Left"] = "Left";
    Dir3["Right"] = "Right";
})(Dir3 || (Dir3 = {}));
console.log(Dir3.Up); // Up
console.log(Dir3.Down); // Down
console.log(Dir3.Left); // Left
console.log(Dir3.Right); // Right
const person = {
    name: 'Henry',
    age: 36,
    profession: 'Database Engineer',
    active: false
};
// Type Assertion
let cid = 21;
let customerID = cid;
// Function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(12, 43)); // 55
// Void
function log(message) {
    console.log(message);
}
// we can passed string as well as number in void
log('hello');
log(34);
const interfacePerson = {
    name: 'Henry',
    profession: 'Database Engineer',
    active: false
};
