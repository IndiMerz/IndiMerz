//objects

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
    Hobbies: ['reading', 'travel']
}

// accessing values form object
let x;
x = person.fName;
x = person.lName;
x = person.age;
x = person.isAdmin;
x = person.address.street;
x = person.Hobbies[1];


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


console.log(person);