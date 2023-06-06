# Strings and Regular Expressions
> **Strings** are a fundamental data type used to `represent` and `manipulate` textual data. **Regular expressions** (regex) are powerful`pattern matching tools` that can be used with strings to perform advanced `search` and `manipulation` operations.


## Definition of Strings
> Strings are a fundamental data type in JavaScript and are used to represent text. They can contain `letters`, `numbers`, `symbols`, and `special characters` enclosed in `single quotes` ('') or `double quotes` (""). 

For example:

```javascript
const fName = 'Adam';
const techStack = 'JavaScript';
const experience = '3';
```

> Strings play a crucial role in programming as they allow us to work with textual data. They are used for tasks such as **displaying messages to users**, **storing user input**, **manipulating text**, and much more.




## Immutable Nature of Strings in JavaScript

> Strings in JavaScript are immutable, which means that individual characters within a string cannot be changed directly. Any operation that appears to modify a string actually returns a new string with the desired changes. 

For example:

```js
let str = "Hello";
str[0] = "J";       // This will not change the first character to "J"
str += " World";    // This creates a new string, but does not modify the original
console.log(str);   // Hello World

```

> To perform modifications on strings, JavaScript provides various string methods that allow you to manipulate and transform strings according to your needs.