//console.log (this is for developers, not for users)
console.log('helo world');

console.log(20, 'number', true);

let a = 10;
console.log(a);

// additional console properties

console.error('this will show red words in console');

console.warn('this is warning in console, it will show yellow words in console');

// table in console
console.table({name: 'Richards', age: '20', country: 'Poland'});

// table in console
console.group('Smartphone');
console.log('Apple');
console.log('Samsung');
console.log('OnePlus');
console.groupEnd();

// css in console
const style = 'padding: 10px; background-color:blue; color: green;'
console.log('%cThis is css in console', style);
