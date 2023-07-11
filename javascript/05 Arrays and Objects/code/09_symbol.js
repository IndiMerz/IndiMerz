// symbol is primitive type

const symb1 = Symbol();
const symb2 = Symbol('foo');
const symb3 = Symbol('bar');

console.log(symb1, symb2, symb3);

console.log(typeof symb1); // symbol

console.log(symb1.description);  // undefined
console.log(symb2.description);  // foo
console.log(symb3.description);  // bar

// symbols are unique
console.log(Symbol('sim') === Symbol('sim'));  // false

// it can be useful for setting up unique IDs,

const user = {
    [Symbol('id')]: 1,
    name: 'Leslie Kelley',
    email: 'leslie@email.com'
}

console.log(user[Symbol('id')]); // undefined


// Symbols are not enumerble
console.log(Object.keys(user));
console.log(Object.values(user));

/*
 we will get only this, not symbol
 [ 'name', 'email' ]
[ 'Leslie Kelley', 'leslie@email.com' ]
 */

for (let key in user) {
    console.log(key); // name email
}


// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user));  // [ Symbol(id) ]


// Symbol.for()
// it uses global registry

const symb4 = Symbol.for('foo');
const symb5 = Symbol.for('foo');

console.log(symb4 === symb5);  // true


console.log(Symbol.keyFor(symb4)); // foo
console.log(Symbol.keyFor(symb2)); // undefined

// toString
console.log(symb1.toString());  // Symbol()
console.log(symb2.toString());  // Symbol(foo)
console.log(symb3.toString());  // Symbol(bar)
console.log(symb4.toString());  // Symbol(foo)
console.log(symb5.toString());  // Symbol(foo)

console.log(symb1.valueOf());
console.log(symb2.valueOf());
console.log(symb3.valueOf());
console.log(symb4.valueOf());
console.log(symb5.valueOf());


// to get all the properties of symbol
console.log(Object.getOwnPropertyNames(Symbol));

/*

[
  'length',      'name',
  'prototype',   'for',
  'keyFor',      'asyncIterator',
  'hasInstance', 'isConcatSpreadable',
  'iterator',    'match',
  'matchAll',    'replace',
  'search',      'species',
  'split',       'toPrimitive',
  'toStringTag', 'unscopables'
]

*/
