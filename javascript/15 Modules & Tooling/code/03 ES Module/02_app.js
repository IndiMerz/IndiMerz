import makeFirstLetCap from './modules/utils1.js';

console.log(makeFirstLetCap('how are you'));



// importing multiple function
import { makeStar, makeMoney } from './modules/utils2.js';
console.log(makeStar('typescript'));
console.log(makeMoney('150'));


// importing class
import Person from './modules/utils3.js';

const peep = new Person('Luzia Stroh', '34')
peep.greet()