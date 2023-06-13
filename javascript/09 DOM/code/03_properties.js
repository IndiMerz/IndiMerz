// get child elements
let output;

const parent = document.querySelector('.child-lists');
output = parent.children;
output = parent.children[2];

output = parent.children[2].nodeName;  // LI
output = parent.children[2].className;  // vegtable

parent.children[1].style.color = 'red';
parent.children[2].innerText = 'Potato';
console.log(output);

// first and last element
parent.firstElementChild.innerText = 'Tomato';
parent.lastElementChild.innerText = 'Brinjal';


// get parent from a child
const child = document.querySelector('.vegetable');

output = child.parentElement;
console.log(output);

child.parentElement.style.border = '2px solid red';
child.parentElement.style.backgroundColor = '#ceee';

// sibling elements
const sibling = document.querySelector('.vegetable:nth-child(3)');

sibling.nextElementSibling.style.color = 'blue';
sibling.previousElementSibling.innerText = 'Peas';

