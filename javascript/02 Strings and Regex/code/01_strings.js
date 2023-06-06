/* JavaScript strings are for storing and manipulating text.

 Strings in JavaScript are immutable, meaning that once a string is created, its value cannot be changed. Instead, string manipulation operations return a new string.

*/


// Creating a string
const fName = 'Adam';
const techStack = 'Javascript';
const experience = 3;

console.log(fName + ' is a ' + techStack + ' developer with ' + experience + ' years of experience.' );

/* 1. Template Literals: 

Template literals allow you to directly embed variables or expressions within the string using ${}. 

*/

console.log(`${fName} is a ${techStack} developer with ${experience} years of experience.`);


// Multiline Strings: Template literals preserve newlines and allow multiline strings without the need for manual line breaks. 
console.log(`
${fName} is a 
${techStack} developer 
with 
${experience} years of experience.
`);


// Expression Evaluation: Within the ${} expression, you can perform computations, call functions, or access object properties.
const x = 5;
const y = 10;
const sum = `${x} + ${y} = ${x + y}`;
console.log(sum);   // Output: "5 + 10 = 15"



// 2. Immutable Nature of Strings in JavaScript

let str = "Hello";
str[0] = "J";    
str += " World";   
console.log(str);


// 2. String Methods

const stringMethods = 'Javascript Strings'
let method; 

method = stringMethods.length
console.log(method);


method = stringMethods.slice(2, 6)
console.log(method);


method = stringMethods.substring(1, 9)
console.log(method);


method = stringMethods.replace('Java', 'Type')
console.log(method);


method = stringMethods.toUpperCase();
console.log(method);

method = stringMethods.toLowerCase();
console.log(method);



let trimeg = '    html, css, js   '
trimeg = trimeg.trim();
console.log(trimeg);


method = stringMethods.charAt(6);
console.log(method);

method = stringMethods.charCodeAt(3);
console.log(method);


// h. split(): A string can be converted to an array with the split() method.
method = stringMethods.split(','); // make array to entire string
method = stringMethods.split('|'); // make array to entire string
method = stringMethods.split(' '); // splits words to make array
method = stringMethods.split('');  // splits all the chars to make array
console.log(method);


// i. concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);



method = stringMethods.padStart(24, 'ok');
console.log(method);  // okokokJavascript Strings

method = stringMethods.padEnd(24, 'p');
console.log(method); // Javascript Stringspppppp

// 3. String Search Methods


method = stringMethods.indexOf('a');     // 2
method = stringMethods.indexOf('a', 2);  // 3,  as it will start searching after position 2
console.log(method);

method = stringMethods.lastIndexOf('String'); // 11
console.log(method);


method = stringMethods.search('script');
console.log(method);

method = stringMethods.includes('script');
console.log(method);

method = stringMethods.startsWith('script'); // False
console.log(method);

method = stringMethods.endsWith('Strings'); // True
console.log(method);

let weather = 'The rain in SPAIN stays mainly in the plain';
let matchingWords = weather.match('ain');
console.log(matchingWords);

