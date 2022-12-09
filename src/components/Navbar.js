import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      {/* <Link to="/">Home</Link> */}
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      {/* <Link to="/addcow">Add Cow</Link> */}
    </div>
  )
}

export default Navbar
