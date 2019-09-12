import React, { PureComponent } from 'react'
import Person from './Person/Person'

// PureComponent does the job of shouldComponentUpdate with a complete props check (without manually implementing shouldComponentUpdate)
export default class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate')
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

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
