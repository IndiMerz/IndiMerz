// Que: Make First Word Capital to the String

const myString = 'developer';

let makeItCap;

// Solution 1:
makeItCap = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2:
makeItCap = myString[0].toUpperCase() + myString.substring(1);

// Solution 3:
makeItCap = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(makeItCap);