import React from 'react';
import ReactDOM from 'react-dom';

const randomNum = Math.floor(Math.random() * 10) + 1;
const fname = 'John';
const lname = 'Smith';
const myName = 'Shahbaz';
const currentYear = new Date().getFullYear();

ReactDOM.render(
  // This is how we can render elements on html
  <div>
    <h1>Hello {`${fname} ${lname}`}, this is a React App</h1>
    <p>This is how we can access outside variables which is {randomNum}</p>

  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>
  </div>,
document.getElementById('root')
);