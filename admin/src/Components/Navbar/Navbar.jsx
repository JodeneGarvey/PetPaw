import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navbar_logo.png'
import navProfile from '../../assets/Professional Profile Picture.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="navlogo" />
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar