import React from 'react'

const done = () => {
  document.querySelector('p').style.cssText = 'text-decoration: line-through;';
}

const undo = () => {
  document.querySelector('p').style.textDecoration = 'none'
}

function App() {
  return (
    <div>
      <p onClick={done} onDoubleClick={undo}>Buy Milk</p>
    </div>
  )
}

export default App
