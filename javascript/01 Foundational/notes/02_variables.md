# Variables

## Declaration
> There are three ways to declare variables
- **`var`**
  - var is used to declare a variable that has a function scope. It means it can be accessed within the function in which it is declared.
  
  - You can assign a value to a var variable, and you can also reassign and redeclare it within its scope.
  
  - One thing to note is that var declarations are hoisted to the top of their scope. It means you can access a var variable even before it is declared in the code.
  
  - Avoid using `var` in modern JavaScript, as it has some quirks and can lead to unintended behavior.

```js
var firstName = 'Henry';
console.log(firstName);
```



- **`let`**

  - let is used to declare a variable that has a block scope. It means it can be accessed only within the block of code where it is declared, such as inside a loop or conditional statement.

  - You can assign a value to a let variable, and you can also reassign it within its scope. However, you cannot redeclare a let variable within the same scope.
  
  - Unlike `var`, *let* declarations are not hoisted. It means you need to declare a let variable before you can use it in your code.
  
  - Use let when you need to declare a variable that will be reassigned later.

```js
let firstName = 'Henry';
console.log(firstName);
```

- **`const`**

  - const is used to declare a constant variable that has a block scope.

  - When you declare a const variable, you must assign an initial value to it, and once assigned, you cannot reassign a new value to it.
  
  - Similar to `let`, *const* declarations are not hoisted. You need to declare a const variable before you can use it in your code.
  
  - Use const when you have a variable that will not be reassigned after initialization.

```js
const firstName = 'Henry';
console.log(firstName);
```

## Good Practices

- Always declare variables before using them to avoid unexpected behavior.
  
- Use descriptive and meaningful variable names to enhance code readability.
  
- When assigning a value to a variable, use the appropriate declaration `(var, let, or const)` based on the intended use and scope of the variable.
  
- Prefer using `const` for variables that `should not be reassigned`, as it helps in creating immutable values and avoids accidental reassignments.
  
- Use `let` for variables that need to be `reassigned` within their scope.
  
- Follow consistent naming conventions to improve code maintainability and collaboration.


## Naming Conventions
> When naming variables in JavaScript, the following conventions are commonly used:

- Only letters, numbers, underscores, and dollar signs are allowed.
- The first letter cannot be a number.


## Naming Formats:

- camelCase: e.g., `fName`
- underscore: e.g., `f_Name`
- dollar sign: e.g., `f$Name`
- PascalCase: e.g., `FName`
- lowercase: e.g., `fname`

## Reassigning Values
>Variables declared with `let` can be reassigned new values, as shown in the example below:

```js
let number = 1;
console.log(number);  // 1

if (true) {
    number++;
}
console.log(number);  // 2

```

> Variables declared with const cannot be directly reassigned, but their properties can be modified if they are objects or arrays:

```js
const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array); // [1, 2, 3, 4, 5, 6]

const employee = {
    name: 'John',
    salary: 1000,
    department: 'Sales'
};

employee.name = 'Miller';
employee.department = 'Technical';

console.log(employee); // {name: 'Miller', salary: 1000, department: 'Technical'}

```

## Multiple Declarations
> Multiple variables can be declared in a single statement using commas:

```js
// let
let x, y, z;

// const
const a = 10, b = 20, c = 10;
```