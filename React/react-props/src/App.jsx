import React from 'react'
import { Card } from './components/Card'
import contacts from './contacts'


export const App = () => {
  return (
    // This is how we can add props to react, name, country, email etc
    <div>
        <Card 
            name={contacts[0].name}
            imgURL={contacts[0].imgURL}
            country={contacts[0].country}
            phone={contacts[0].phone}
            email={contacts[0].email}
        />
        <Card 
            name={contacts[1].name}
            imgURL={contacts[1].imgURL}
            country={contacts[1].country}
            phone={contacts[1].phone}
            email={contacts[1].email}
        />
        <Card 
            name={contacts[2].name}
            imgURL={contacts[2].imgURL}
            country={contacts[2].country}
            phone={contacts[2].phone}
            email={contacts[2].email}
        />
    </div>
  )
}
