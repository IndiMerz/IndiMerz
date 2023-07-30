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

const greetColor = {
  color: '',
}

  const time = new Date();
  const hour = time.getHours()
  let greet;

  if (hour <= 24 && hour > 18) {
    greet = 'Good Night'
    greetColor.color = 'blue'
  } else if (hour >= 16 && hour <= 18){
    greet = 'Good Evening'
    greetColor.color = '#FAF'
  } else if (hour >= 12 && hour < 16) {
    greet = 'Good Afternoon'
    greetColor.color = 'green'
  } else if (hour >= 5 && hour < 12) {
    greet = 'Good Morning'
    greetColor.color = 'red'
  } else {
    greet = 'zzzz'
    greetColor.color = 'violet'
  }


ReactDOM.render(
  // This is how we can render elements on html
  <div>
    <h1 style={greetColor}>{greet}</h1>

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