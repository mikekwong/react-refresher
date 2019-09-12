import React, { Component } from 'react'
import './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'
// import Aux from '../components/hoc/Aux'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   console.log('[App.js] constructor')
  // }
  state = {
    persons: [
      { id: '23423fa', name: 'Max', age: 28 },
      { id: 'aksdf8', name: 'Emily', age: 20 },
      { id: '823fa', name: 'John', age: 15 },
    ],
    otherState: 'some value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    // to always allow update (true is default is this lifecycle method is not used)
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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

    this.setState(prevState => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      }
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
    console.log('[App.js] render')
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ showCockpit: false })
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit && (
          <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            toggle={this.togglePersonsHandler}
          />
        )}

        {persons}
      </div>
    )
  }
}

export default App
