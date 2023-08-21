import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='main-container'>
        <div className='navbar'>
            <div className='logo'>M-INVEST</div>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/service'>Services</NavLink>
            <NavLink exact to='/about'>About</NavLink>
            <NavLink exact to='/contact'>Contact</NavLink>
        </div>

    </div>
  )
}

export default Navbar