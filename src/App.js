import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Emily', age: 20 },
      { name: 'John', age: 15 }
    ],
    otherState: 'some value'
  }

  handleClick = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Emily', age: 15 },
        { name: 'John', age: 15 }
      ],
      otherState: 'some value'
    })
  }

  render () {
    return (
      <div className='App'>
        <h1>I'm a react app</h1>
        <p>This is really working</p>
        <button onClick={() => this.handleClick('Maximil')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          // this form of binding is slightly more resoruce efficient
          click={this.handleClick.bind(this, 'oops')}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    )
  }
}

export default App
