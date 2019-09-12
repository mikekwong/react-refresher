import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Person.css'
import withClass from '../../hoc/withClass'

class Person extends Component {
  render() {
    console.log('[Person.js] rendering..')
    return (
      <div className="person">
        {/* <Aux> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </Aux> */}
      </div>
    )
  }
}

export default withClass(Person, classes.person)
