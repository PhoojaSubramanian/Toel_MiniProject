import React from 'react'
import "./NavBar_Open.css"
import {Link} from 'react-router-dom'
function Opening() {
  return (
    <open className="nav-items">
        <img src="./travel.jpeg"  height= "60px" width= "60px" className = "nav-logo" />
        <h2 className='nav-toel'>Toel</h2>
        <h3 className='nav-title'>Exclusively for Travel Enthusiast</h3>
        <Link to="/sign_up"><button className='nav-sign'>Signup</button></Link>
        <Link to="/login"><button className='nav-log'>Login</button></Link>
    </open>
  )
}

export default Opening
