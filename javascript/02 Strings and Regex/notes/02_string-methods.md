# String Operations
> Strings in JavaScript offer various operations for manipulating and working with text data. In this guide, we will explore some commonly used string operations.

## Concatenation
> Concatenation is the process of combining two or more strings together. In JavaScript, you can use the `+` operator to concatenate strings. 

For example:

```javascript
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log(fullName);  // Output: John Doe
```


## String Interpolation
> String interpolation allows you to insert `variables` or `expressions` into a string using template literals `${}`. This provides a more readable and convenient way to combine strings with dynamic values. 

For example:
```js
const age = 25;
const message = `I am ${age} years old.`;
console.log(message);  // Output: "I am 25 years old."
```

### Multiline Strings: 
>Template literals preserve newlines and allow multiline strings without the need for manual line breaks. 

```js
const name = 'Joe Garten';
const age = '32';
const mySelf = `
My name 
is ${name} and Im
${age} years
old
`
console.log(mySelf);
```

Output:
```bash
My name 
is Joe Garten and Im
32 years
old
```

> Within the ${} expression, you can perform computations, call functions, or access object properties.

Example:
```js
const x = 5;
const y = 10;
const sum = `${x} + ${y} = ${x + y}`;
console.log(sum);   // Output: 5 + 10 = 15
```



# String Methods
> JavaScript provides several built-in string methods that offer functionalities for manipulating and working with strings. Here are some commonly used string methods:

1. **`length`**
>The length property returns the number of characters in a string.

```js
const string = 'JavaScript';
console.log(string.length);  // Output: 10
```

2. **`slice()`**
> The slice() method extracts a portion of a string and returns a new string.

```js
const string = 'JavaScript Strings';
const sliced = string.slice(2, 6);
console.log(sliced);  // Output: "vaSc"

```

3. **`replace()`**
> The replace() method replaces a specified value with another value.

```js
const string = 'JavaScript Strings';
const replaced = string.replace('Java', 'Type');
console.log(replaced);  // Output: "TypeScript Strings"

```

4. **`toUpperCase() / toLowerCase()`**
> The toUpperCase() and toLowerCase() methods convert a string to uppercase and lowercase, respectively.

```js
const string = 'JavaScript Strings';
console.log(string.toUpperCase());  // Output: "JAVASCRIPT STRINGS"
console.log(string.toLowerCase());  // Output: "javascript strings"

```

5. **`trim()`**
> The trim() method removes whitespace from both ends of a string.

```js
let string = '    html, css, js   ';
string = string.trim();
console.log(string);  // Output: "html, css, js"

```

6. **`split()`**
> The split() method splits a string into an array of substrings based on a specified separator.
```js
const string = 'JavaScript Strings';
console.log(string.split(','));  // Output: ["JavaScript Strings"]
console.log(string.split(' '));  // Output: ["JavaScript", "Strings"]
console.log(string.split(''));   // Output: ["J", "a", "v", "a", ...]

```

7. **`charAt() / charCodeAt()`**
> The charAt() method returns the character at the specified index, while charCodeAt() returns the Unicode value of the character.

```js
const string = 'JavaScript Strings';
console.log(string.charAt(6));       // Output: "c"
console.log(string.charCodeAt(3));  // Output: 97

```

8. **`padStart() / padEnd()`**
>  Adds characters at the beginning and end of the string until it reaches the targetLength

```js
let string = "Javascript Strings";

let paddedStringL = string.padStart(24, 'ok');
console.log(paddedStringL);    // Output: "okokokJavascript Strings"

let paddedStringR = string.padEnd(24, 'p');
console.log(paddedString); // Output: "Javascript Stringspppppp"
```



## String Search and Matching Methods
> There are several methods available for searching and matching strings. These methods allow you to find specific substrings or patterns within a string and perform various operations based on the search results.


1. **`indexOf()`**
>  The indexOf() method returns the index `(position)` of the first occurrence of a specified string within another string. If the string is not found, it returns `-1`. It can also accept an optional second parameter specifying the *starting position for the search*.

```js
let string = "Javascript Strings";

let position = string.indexOf('a');
console.log(position);   // Output: 2

position = string.indexOf('a', 2);
console.log(position);   // Output: 3

```

2. **`lastIndexOf()`**
>  The lastIndexOf() method works similarly to indexOf(), but it returns the index of the last occurrence of a specified string within another string.

```js
let string = "Javascript Strings";

let position = string.lastIndexOf('String');
console.log(position);   // Output: 11

```
> In this example, the lastIndexOf() method is used to find the last occurrence of the word 'String' in the string. It returns 11, which is the index of the 'S' character at the beginning of the word.

3. **`includes()`**
> The includes() method checks if a string contains a specified value and returns true or false accordingly.

```js
let string = "Javascript Strings";

let result = string.includes('script');
console.log(result);   // Output: true

```
> In this example, the includes() method is used to check if the string contains the substring 'script'. Since it does, the method returns true.



4. **`startsWith() / endsWith()`**
> The startsWith() and endsWith() methods check if a string begins or ends with a specified value and return true or false accordingly.


```js
let string = "Javascript Strings";

let startsWithScript = string.startsWith('script');
console.log(startsWithScript);   // Output: false

let endsWithStrings = string.endsWith('Strings');
console.log(endsWithStrings);   // Output: true

```

5. **`match()`**
> The match() method searches a string for a specified pattern and returns an array containing the results of the match.

```js
let weather = 'The rain in SPAIN stays mainly in the plain';

let matchingWords = weather.match('ain');
console.log(matchingWords);   // Output: ["ain", "ain", "ain"]

```


## String Comparison
> String comparison involves comparing strings for equality, case sensitivity, and alphabetical order.


- **Equality comparison**: To check if two strings are equal, you can use the `===` or `==` operators. The `===` operator performs strict equality comparison, considering both value and type, while the `==` operator performs loose equality comparison, converting the operands to a common type if necessary.
  
  ```js
  const str1 = "Hello";
  const str2 = "hello";
  console.log(str1 === str2);    // Output: false
  console.log(str1 == str2);     // Output: false
  ```

- **Case sensitivity**: By default, string comparisons in JavaScript are case-sensitive. This means that uppercase and lowercase letters are treated as distinct characters. If you want to perform a case-insensitive comparison, you can convert the strings to the same case (e.g., lowercase or uppercase) using the `toLowerCase()` or `toUpperCase()` string methods before comparing.
   
  ```js
  const str3 = "Hello";
  const str4 = "hello";
  console.log(str3.toLowerCase() === str4.toLowerCase());  // Output: true

  ```

- **Alphabetical order**: To compare strings in alphabetical order, you can use the `localeCompare()` method, which returns a negative number if the first string comes before the second string, a positive number if it comes after, and 0 if they are equal.
     
  ```js
  const str5 = "apple";
  const str6 = "banana";
  console.log(str5.localeCompare(str6));  // Output: -1 (str5 comes before str6)

  ```

