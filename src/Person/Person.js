import React from 'react'

const Person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and {props.age} years old
      </p>
      <p>{props.children}</p>
    </div>
  )
}

export default Person
