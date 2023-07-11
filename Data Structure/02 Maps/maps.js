const myMap = new Map();

// setting values in map
myMap.set('name', 'Joshua');
myMap.set(1, 'Red');
myMap.set(2, 'Blue');


console.log(myMap);
// Map(3) { 'name' => 'Joshua', 1 => 'Red', 2 => 'Blue' }


// getting values
console.log(myMap.get('name'));  // Joshua
console.log(myMap.get(1));       // Red
console.log(myMap.get(2));       // Blue


// size of map
console.log(myMap.size);  // 3

// checking map has value present
console.log(myMap.has('name')); // true
console.log(myMap.has(1));      // true
console.log(myMap.has(4));      // false


// delete
myMap.delete(2)
console.log(myMap);  // Map(2) { 'name' => 'Joshua', 1 => 'Red' }



const peopleMap = new Map();
peopleMap.set('Paul', {phone: '021-288-1146', country: 'Ireland', email: 'paul.riley@example.com'});
peopleMap.set('Silvio', {phone: '0810-7705757', country: 'Germany', email: 'silvio.klein@example.com'});
peopleMap.set('Tobias', {phone: '71656862', country: 'Denmark', email: 'tobias.larsen@example.com'});

// get email of all people
peopleMap.forEach((people) => console.log(people.email));

// get keys
console.log(peopleMap.keys());  // [Map Iterator] { 'Paul', 'Silvio', 'Tobias' }

// get values
console.log(peopleMap.values());

// get entries
console.log(peopleMap.entries());

// iterator
const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// convert map to array
const peepArr = Array.from(peopleMap);
console.log(peepArr);