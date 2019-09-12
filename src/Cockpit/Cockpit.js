import React, { useEffect } from 'react'
import './Cockpit.css'

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud')
    }, 1000)
    // for Unmounting, you can return a function with anything you wante cleaned up
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
    // with empty array, it will run once but never again (similar as if this is CDM)
    // Can pass in a state or prop to emulate CDU in useEffect
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd use Effect')
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })

  const style = {
    backgroundColor: 'green',
    color: '#FFF',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }
  // Using an array to assign classNames by conditions
  // let classes = ['red', 'bold'].join(' ') //'red bold'
  const classes = []
  if (props.personsLength <= 2) {
    classes.push('red') // classes = ['red]
  }
  if (props.personsLength <= 1) {
    classes.push('bold') //classes = ['red', 'bold']
  }
  if (props.showPersons) {
    // if showPersons state is true, make background 'red' for toggle
    style.backgroundColor = 'red'
  }

  return (
    <div className={classes.Cockpit}>
      <h1>I'm a react app</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button style={style} onClick={props.toggle}>
        Toggle Persons
      </button>
    </div>
  )
}

export default React.memo(Cockpit)
