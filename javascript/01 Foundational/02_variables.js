/* Ways to declare a variables
1. var 
2. let
3. const
*/

let fName = 'Jackson'
let lName = 'Smith'
console.log(fName, lName);

/*
Naming conventions:
1. only letters, numbers, underscores and dollar signs are allowed
2. the first letter cant be a number

Multi word formatting

fName = camelCase
f_Name = underscore
f$Name = dollar sign
FName = PascalCase
fname = lowercase

*/


// Reassigning Values

// let
let number = 1;
console.log(number);

if (true){
    number++;
}
console.log(number)


// const

/* 
1.  const x = 100;
    const x = 150;
    this is wrong, const cant be directly re-assigned

2.  const number;
    this is wrong, const declarations must be initialized
*/

const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);

const employee = {
    name: 'John',
    salary: 1000,
    department: 'Sales'
};

employee.name = 'Miller';
employee.department = 'Technical';

console.log(employee);


// Declare multple values
let x, y, z

const a=10, b=20, c=10

console.log(b);