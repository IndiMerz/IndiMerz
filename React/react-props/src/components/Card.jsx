import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <p>{props.id}</p>
        <h1>{props.name}</h1>
        <img src={props.imgURL} alt="" />
        <p>{props.country}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
  )
}
