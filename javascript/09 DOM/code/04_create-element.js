// creating a new element

const addNewHeading = document.createElement('h1');

// adding class and id name to it
addNewHeading.className = 'created';
addNewHeading.id = 'myID';

// setting atrributes
addNewHeading.setAttribute = ('title', 'This is created by JS');

// adding text in it
addNewHeading.innerText = 'Create Elements by JS' // not good practice

const text = document.createTextNode(' Hello World');
addNewHeading.appendChild(text);

// it will append on last
document.body.appendChild(addNewHeading);

// by using query selector, it will appent at specific place
document.querySelector('.properties').appendChild(addNewHeading);

console.log(addNewHeading);

