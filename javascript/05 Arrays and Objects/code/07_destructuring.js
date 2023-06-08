const name = 'Samrah Kellin';
const age = 38;
const country = 'France';

const personDetails = {
    name,
    age,
    country
};

console.log(personDetails);
// { name: 'Samrah Kellin', age: 38, country: 'France' }

console.log(personDetails.age); // 38


// Destructuring

const obj1 = {
    id: 'usr1',
    password: 'myPass@password',
    user:{
        myName: 'Jief Kei',
        myAge: 28
    }
}

const { id } = obj1;
console.log(id);  // usr1

const {  
    password, 
    user: {myName} 
} = obj1;

console.log(password, myName);  // myPass@password Jief Kei


// rename properties
const {  
    password: secretCode,
    user: {myAge}
} = obj1;

console.log(secretCode); // myPass@password


// desctructuring arrays

const numbers = [21, 54, 24, 75, 97];

const [num1, num2, ] = numbers
console.log(num1, num2); // 51, 54

// rest operator
const [numb1, numb2, ...rest] = numbers
console.log(numb1, numb2, rest);  // 21 54 [ 24, 75, 97 ]



