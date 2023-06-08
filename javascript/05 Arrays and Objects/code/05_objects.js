//objects

const obj = {
    name: 'Henry Clark',
    profession: 'DevOps Engineer',
    salary: '$200k'
}



// nesting in oject
const person = {
    fName: 'John',
    lName: 'Doe',
    age: 45,
    isAdmin: true,

    address:{
        street: 'B-34, MB Road',
        city: 'New Delhi',
        state: 'Delhi'
    },

    Hobbies: ['reading', 'travel'],

    profession: {
        techStack: {
            development: ['mongoDB', 'react', 'express', 'node'],
            design: ['figma', 'illustrator']
        }
    }
}

console.log(person.profession.techStack.development[2]);  // express

// accessing values form object
let x;
x = person.fName;
x = person.lName;
x = person.age;
x = person.isAdmin;
x = person.address.street;
x = person.Hobbies[1];

// another way
x = person['fName'];

// changing values
person.fName = 'Richards';
person.isAdmin = false;

delete person.lName;


// adding new properties
person.salary = '$750';

// fn
person.greet = function () {
    console.log(`Heyy! I'm ${this.fName}`);
}

person.greet();



// obj constrctor
const crypto = new Object();

// passing values in it
crypto.networkName = 'Smart Chain';
crypto.symbol = 'BNB';
crypto.chainID = '56';
crypto.explorer = 'https://bscscan.com';

console.log(crypto);
/* {
  networkName: 'Smart Chain',
  symbol: 'BNB',
  chainID: '56',
  explorer: 'https://bscscan.com'
}
*/
