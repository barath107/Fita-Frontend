import React from 'react'
import Child from './Child'
function Navbar({b}) {
  return (
    <div>
        <p>Welcome to react {b} </p>
        <Child b={b} />
    </div>
  )
}

export default Navbar