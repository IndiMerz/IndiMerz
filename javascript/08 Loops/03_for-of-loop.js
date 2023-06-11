// loop over array
const users = ['Alex', 'Henry', 'Walt', 'Will'];

for (const name of users) {
    console.log(name);
}

/*
Alex
Henry
Walt
Will
*/

// loop over string

const string = 'Hello World';
for (const char of string){
    console.log(char);
}


// loop over object

const faang = [
    {names: 'Facebook'},
    {names: 'Apple'},
    {names: 'Amazon'},
    {names: 'Netflix'},
    {names: 'Google'}
]

for (const type of faang){
    console.log(type.names);
}


// loop over map

const person = new Map();
person.set('name:', 'Mike');
person.set('age:', 30);

for (const [key, value] of person){
    console.log(key, value);
}