import React, { useState } from 'react'

export const Event = () => {

    const [heading, setHeading] = useState('Please Submit It')
    const [ismouseOver, setIsmouseOver] = useState(false)
   
    const submit = () => {
        setHeading('Submitted')
    }

    const hover = () => {
        setIsmouseOver(true)
    }

    const rmHover = () => {
        setIsmouseOver(false)
    }

  return (
    <div>
        <h1>{heading}</h1>
        <input type='text' placeholder='enter username' />
        <button 
        style={{ backgroundColor: ismouseOver ? 'red' : 'black'}}
        onClick={submit} 
        onMouseOver={hover} 
        onMouseOut={rmHover}>
        Submit
        </button>
    </div>
  )
}
