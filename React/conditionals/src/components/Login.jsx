import React from 'react'
import { Input } from './Input'

export const Login = () => {
  return (
    <form type='submit'>
      <Input 
        type='text'
        placeholder='Enter Your Username'
      /> 
      <br/>
      <Input 
        type='password'
        placeholder='Enter Your Password'
      />
      <br/>
      <button type='sumbit'>Submit</button>
    </form>
  )
}
