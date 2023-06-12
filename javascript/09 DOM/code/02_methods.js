// 1. getElementByID

let getID;
// to get whole element of the id
getID = document.getElementById('content');

// to get id name of selected element
getID = document.getElementById('content').id;

// to get class name of selected element
getID = document.getElementById('content').className;

// another way
getID = document.getElementById('content').getAttribute('class');
getID = document.getElementById('content').getAttribute('id');


// set attributes

// this will change id name from 'content' to 'hello'
getID = document.getElementById('content').id = 'hello';

// shows the title text when hover on selected
getID = document.getElementById('hello').title = 'DOM Manipulation';

// set class in selected element
getID = document.getElementById('heading').setAttribute('class', 'main');

// it will change id from 'heading' to 'container'
getID = document.getElementById('heading').setAttribute('id', 'container');

console.log(getID);



// making a varible
const listItem = document.getElementById('us-company');

// change element content
listItem.textContent = 'tesla';
listItem.innerText = 'tesla2';
listItem.innerHTML = '<tesla3>';
listItem.innerHTML = '<strong>Famous US Companies</strong>';


//change style
listItem.style.color = 'pink';
listItem.style.backgroundColor = 'blue';
listItem.style.padding = '15px';
listItem.style.borderRadius = '15px';
listItem.style.width = '30vw';


// 2. querySelector
document.querySelector('h1');
document.querySelector('#faang');
document.querySelector('.tech');
document.querySelector('input[type=text]').style.borderRadius = '10px';
document.querySelector('li:nth-child(2)').style.color = 'red';

document.querySelector('ul').style.backgroundColor = 'palegreen'
document.querySelector('li').innerText = 'Notebook'
