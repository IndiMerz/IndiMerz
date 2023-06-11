const age = 26;

if (age >= 18){
    console.log('You can Drive');
} else {
    console.log('You cant Drive');
}

// ternary operator
age >= 18 ? console.log('You can vote') : console.log('You cant vote');


// assigning conditional value to a variable
const canDrink = age >= 18 ? true : false;
console.log(canDrink);

const canMarry = age >= 22 ? 'You can marry' : 'You cant marry';
console.log(canMarry);


// multiple statements
const auth = true;
let redirect;

if (auth) {
    console.log('Welcome Back');
    redirect = console.log('/profile');
} else {
    console.log('Access Denied');
    redirect = console.log('/login');
}


const checkAdmin = auth ? ['You are admin', '/profile'] : ['404 Not Found', '/login'];
console.log(...checkAdmin);


// single condition

auth ? console.log('welcome to dashboard') : null;

// shorter way

auth && console.log('welcome back');