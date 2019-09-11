import React, { Component } from 'react'
import Person from './Person/Person'

export default class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return { message: 'Snapshot!' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons.js] ComponentWillUnmount')
  }

  render() {
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, idx) => {
      return (
        <Person
          click={() => this.props.clicked(idx)}
          key={person.id}
          name={person.name}
          age={person.age}
          changed={e => this.props.changed(e, person.id)}
        />
      )
    })
  }
}
