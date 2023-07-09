/*
1. Configurable
2. Enumerable
3. Writable
4. Value
*/

// all flags on PI is set to false
Math.PI = 20 // wont work
console.log(Math.PI);
// to check flag description
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);
/*
configurable: false
enumerable: false
writable: false 
value: 3.141592653589793
*/


// all flags on own created object is set to true
const rectObj = {
    name: 'Rectangle 1',
    width: 30,
    height: 20
};

const descriptor2 = Object.getOwnPropertyDescriptor(rectObj, 'name')
console.log(descriptor2);


// changing flags

Object.defineProperty(rectObj, 'name', {
    writable: false ,
    configurable: false,
    enumerable: false,
});

rectObj.name = 'new Rectangle'; // it wont change name (writable)
delete rectObj.name; // it wont delete (configurable)
delete rectObj.width; // it will delete

const descriptor3 = Object.getOwnPropertyDescriptor(rectObj, 'name')
console.log(descriptor3);
console.log(rectObj);

// (enumerable) : if true, it will loop through
for (let [key, value] of Object.entries(rectObj)){
    console.log(`${key} - ${value}`);
}

// to get flag of whole object
const descriptor4 = Object.getOwnPropertyDescriptors(rectObj)
console.log(descriptor4);



// Sealing & Freezing

const pGrmObj = {
    name: 'Parallelogram',
    base: 30,
    height: 10
}

// it will prevent properties from being added or removed, can still be change. (false: configurable)
Object.seal(pGrmObj);

let descriptors = Object.getOwnPropertyDescriptors(pGrmObj);
console.log(descriptors);


pGrmObj.color = 'black'; // wont add
delete pGrmObj.name; // wont delete

pGrmObj.height = 100; // it will work

console.log(pGrmObj);


const cirObj = {
    name: 'Circle',
    radius: 50
}

// it will prevent properties from being added, removed or changed (false: configurable, writable) 
Object.freeze(cirObj);


cirObj.color = 'black'; // wont add
delete cirObj.name; // wont delete
cirObj.name = 'not Sphare' // wont change

descriptors = Object.getOwnPropertyDescriptors(cirObj);
console.log(descriptors);


// isSealed & isFrogen

console.log(`pGramObj is sealed?`, Object.isSealed(pGrmObj));  // true
console.log(`pGramObj is frozen?`, Object.isFrozen(pGrmObj));  // false
console.log(`cirObj is sealed?`, Object.isSealed(cirObj));      // true
console.log(`cirObj is frozen?`, Object.isFrozen(cirObj));      // true