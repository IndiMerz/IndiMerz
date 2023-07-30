import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const randomNum = Math.floor(Math.random() * 100) + 1;
const fname = 'John';
const lname = 'Smith';
const myName = 'Shahbaz';
const currentYear = new Date().getFullYear();
const img = 'https://picsum.photos/200/300'

const customStyle = {
  color: 'green',
  fontSize: '1.5em',
  border: '2px solid black',
  display: 'inline'
}

ReactDOM.render(
  // This is how we can render elements on html
  <div>
    <h1 className='heading' contentEditable='true' spellCheck='false'>Hello {`${fname} ${lname}`}, this is a React App</h1>
    <p>This is how we can access outside variables which is {randomNum}</p>

  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>

  <div className='images'>
    <h1>Random Images</h1>
    <img src={img} alt='random images'/>
  </div>

  <div>
    <h1>Inline Styling</h1>
    <p style={{ color: '#FAFABD', backgroundColor: 'black'}}>This is css inline styling</p>
    <p style={customStyle}>This is css inline styling using variable</p>
  </div>
  </div>,
document.getElementById('root')
);