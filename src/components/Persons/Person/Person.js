import React, { Component } from 'react'
import './Person.css'

export default class Person extends Component {
  render() {
    console.log('[Person.js] rendering..')
    return (
      <div className="person">
        <p onClick={this.props.click}>
          I'm {this.props.name} and {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    )
  }
}
