import React from 'react'

export const DefaultProps = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
    </div>
  )
}

// giving default props: it will show if value isnt given in props

DefaultProps.defaultProps = {
    title: 'This is default title'
}


// We can destructure props like this to make it shorter

export const PropsDestructure = ({ name, age, job }) => {
    return (
      <div>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{job}</h1>
      </div>
    )
  }