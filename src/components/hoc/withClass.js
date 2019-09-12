import React from 'react'

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      {/* spread operator to spread the props that are inside the props object to distribute to key value properties to component */}
      <WrappedComponent {...props} />
    </div>
  )
}

export default withClass
