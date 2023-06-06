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

// a. length: Returns the length of a string.
method = stringMethods.length
console.log(method);


// b. slice(): Extracts a portion of a string and returns a new string.
method = stringMethods.slice(2, 6)
console.log(method);


// c. substring(): Extracts a portion of a string and returns a new string.
method = stringMethods.substring(1, 9)
console.log(method);


/* d. 
 replace()    : Replaces a specified value with another value. 
 replaceAll() : Replaces all occurrences of a specified value with another value.
*/
method = stringMethods.replace('Java', 'Type')
console.log(method);


/* e. 
toUpperCase(): Converts a string to uppercase.
toLowerCase(): Converts a string to lowercase.
*/
method = stringMethods.toUpperCase();
console.log(method);

method = stringMethods.toLowerCase();
console.log(method);


/* f.
trim(): Removes whitespace from both ends of a string.
trimStart(): Removes whitespace from the beginning of a string
trimEnd(): Removes whitespace from the end of a string
*/
let trimeg = '    html, css, js   '
trimeg = trimeg.trim();
console.log(trimeg);


/* g.
charAt(): Returns the character at the specified index.
charCodeAt(): Returns the Unicode value of the character at the specified index.
*/
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


/* j. 
 Add chars at the beginning and end of the string until it reaches the targetLength
 padStart() : pads a string from the start
 padEnd()   : pads a string from the end.
*/
method = stringMethods.padStart(24, 'ok');
console.log(method);  // okokokJavascript Strings

method = stringMethods.padEnd(24, 'p');
console.log(method); // Javascript Stringspppppp




// 3. String Search Methods


/* a. 
indexOf()     : returns the index (position) the first occurrence of a string in a string
lastIndexOf() : returns the index of the last occurrence of a specified text in a string

Both indexOf() and lastIndexOf() return -1 if the text is not found:
*/

method = stringMethods.indexOf('a');     // 2
method = stringMethods.indexOf('a', 2);  // 3,  as it will start searching after position 2
console.log(method);

method = stringMethods.lastIndexOf('String'); // 11
console.log(method);


// b. search() :  searches a string for a string and returns the position of the match:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

method = stringMethods.search('script');
console.log(method);



// c. includes() : returns true if a string contains a specified value. Otherwise it returns false.
method = stringMethods.includes('script');
console.log(method);


/* d. 
startsWith() : returns true if a string begins with a specified value. Otherwise false.
endsWith() :  returns true if a string ends with a specified value. Otherwise false.
*/
method = stringMethods.startsWith('script'); // False
console.log(method);

method = stringMethods.endsWith('Strings'); // True
console.log(method);



// e. match() : returns an array containing the results of matching a string
let weather = 'The rain in SPAIN stays mainly in the plain';
let matchingWords = weather.match('ain');
console.log(matchingWords);