// get lements nodes
// child

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



// access all Nodes 

// child

let result;

const parentNode = document.querySelector('.parent');

result = parentNode.childNodes;
/*
we will get all the node available under parent 

0: #text "\n        "​
1: <!--  This is node  -->
2: #text "\n        "​
3: <li class="child">​
4: #text "\n        "​
5: <li class="child">​
6: #text "\n        "​
7: <li class="child">​
8: #text "\n        "​
9: <li class="child">​
10: #text "\n    "
​
length: 11
*/

result = parentNode.childNodes[3].textContent;  // List 1
result = parentNode.childNodes[3].nodeName;  // LI
result = parentNode.childNodes[1].textContent;  // This is node 
result = parentNode.childNodes[3].outerHTML;  // <li class="child">List 1</li>
result = parentNode.childNodes[5].innerHTML;  // List 2
console.log(result);

parentNode.childNodes[3].innerText = 'HTML';
parentNode.childNodes[5].style.color = '#f40';


parentNode.firstChild.textContent = 'Im New here!';
parentNode.lastChild.textContent = 'Im New here too!';


// parent node
const childNode = document.querySelector('.child');

childNode.parentNode.style.backgroundColor = '#ccc';
childNode.parentNode.style.padding = '20px';


// sibling
const siblingNode = document.querySelector('.child:nth-child(2)');

siblingNode.nextSibling.textContent = 'Javascript';
siblingNode.previousSibling.textContent = 'css';
