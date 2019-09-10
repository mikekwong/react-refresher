import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '23423fa', name: 'Max', age: 28 },
      { id: 'aksdf8', name: 'Emily', age: 20 },
      { id: '823fa', name: 'John', age: 15 },
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

  nameChangedHandler = (e, id) => {
    const personIdx = this.state.persons.findIndex(person => {
      return person.id === id
    })
    // more modern approach to make shallow copy of object
    const person = {
      ...this.state.persons[personIdx],
    }
    // const person = Object.assign({}, this.state.person[personIdx])

    person.name = e.target.value

    const persons = [...this.state.persons]
    persons[personIdx] = person

    this.setState({
      persons: persons,
    })
  }

  deletePersonHandler = personIdx => {
    // const persons = this.state.persons.slice()
    // create copy of persons state
    const persons = [...this.state.persons]
    persons.splice(personIdx, 1)
    this.setState({ persons: persons })
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
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                click={() => this.deletePersonHandler(idx)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={e => this.nameChangedHandler(e, person.id)}
              />
            )
          })}
          {/* <Person
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
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
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
