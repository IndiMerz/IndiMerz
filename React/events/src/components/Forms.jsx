import React, {useState} from 'react'

export const Forms = () => {
    const [name, setName] = useState('');
    const [heading, setheading] = useState('')


    const handleChange = (e) => {
        setName(e.target.value)
    }

    const displayName = (e) => {
        e.preventDefault()
        setheading(name)
    }

  return (
    <div>
        <h1>Hello {heading}</h1>
        <form onSubmit={displayName}>
        <input 
        onChange={handleChange} 
        type='text' 
        placeholder='enter your name' 
        value={name}
        />
        <button>Register</button>
        </form>
    </div>
  )
}
