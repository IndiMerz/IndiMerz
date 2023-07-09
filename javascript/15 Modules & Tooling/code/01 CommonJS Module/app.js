const getMessage = require('./Utils1');

console.log(getMessage);
console.log(getMessage.text);

const makeFirstLetCap = require('./Utils2');

console.log(makeFirstLetCap('hello world'));


// importing multiple function
const { makeStar, makeMoney } = require('./Utils3');
console.log(makeStar('javascript'));
console.log(makeMoney('200'));


// importing class
const Person = require('./Utils4');

const peep = new Person('Roberto', '67')
peep.greet()