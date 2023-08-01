import React from 'react'
import { Input } from './Input'

export const Form = (props) => {
  return (
    <form>
        <Input 
            type='text'
            placeholder='Username'
        />
        <Input 
            type='password'
            placeholder='password'
        />

        {props.isRegistered === false && <Input type='password' placeholder='confirm password' /> }

      <button type='sumbit'>
        {props.isRegistered ? 'Login' : 'Register'}
      </button>
    </form>
  )
}
