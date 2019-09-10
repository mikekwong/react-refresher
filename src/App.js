import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [{ name: 'Max', age: 28 }, { name: 'Emily', age: 20 }],
    otherState: 'some value'
  }

  handleClick = () => {
    this.setState({
      persons: [{ name: 'Maximillian', age: 28 }, { name: 'Emily', age: 15 }]
    })
  }

  render () {
    return (
      <div className='App'>
        <h1>I'm a react app</h1>
        <p>This is really working</p>
        <button onClick={this.handleClick}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    )
  }
}

export default App
