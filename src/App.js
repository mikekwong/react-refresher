import React, { useState, useEffect } from 'react'
import './App.css'
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersons] = useState({
    persons: [{ name: 'Max', age: 28 }, { name: 'Emily', age: 20 }]
  })
  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const handleClick = () => {
    setPersons({
      persons: [{ name: 'Maximillian', age: 28 }, { name: 'Emily', age: 15 }]
    })
  }

  return (
    <div className='App'>
      <h1>I'm a react app</h1>
      <p>This is really working</p>
      <button onClick={handleClick}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
    </div>
  )
}

// state = {
//   persons: [{ name: 'Max', age: 28 }, { name: 'Emily', age: 20 }],
//   otherState: 'some value'
// }

export default App
