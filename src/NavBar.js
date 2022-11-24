import React from 'react'
import "./NavBar.css"
import {Link} from 'react-router-dom'
export default function HomeNav() {
  return (
        <open className="nav-items">
            <img src="./travel.jpeg"  height= "60px" width= "60px" className = "nav-logo" />
            <Link to="/home"><h2 className='nav-toel'>Toel</h2></Link>
            <h2 className='body-Preplan'>Preplans</h2>
            <h2 className='body-connect'>Connect</h2>
            <h2 className='body-drive'>Drive</h2>
            <img src="profile.jpeg" height="40px" width ="40px" className='body-profile'/>
            <h3 className='body-protext'>Profile</h3>
            <button className='nav-logout'>Log Out</button>
        </open>
  )
}
