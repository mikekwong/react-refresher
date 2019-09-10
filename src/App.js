import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Emily', age: 20 },
      { name: 'John', age: 15 },
    ],
    otherState: 'some value',
    showPersons: false,
  }

  handleClick = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Emily', age: 15 },
        { name: 'John', age: 15 },
      ],
      otherState: 'some value',
    })
  }

  onChangeHandler = e => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: e.target.value, age: 15 },
        { name: 'John', age: 15 },
      ],
    })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    const style = {
      backgroundColor: 'gray',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
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
            changed={this.onChangeHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>I'm a react app</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler('Maximil')}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App
