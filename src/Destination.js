import React from 'react'
import {Link} from 'react-router-dom'
import "./Destination.css"
function FirstNav() {
    const imgStyle = {
        width:700,
        height:500,
        position: 'relative',
        top: 120,
        left:100
    }
  return (<div>
    <open className="nav-items">
        <img src="./travel.jpeg"  height= "60px" width= "60px" className = "nav-logo" />
        <h2 className='nav-toel'>Toel</h2>
        <h3 className='nav-title'>Exclusively for Travel Enthusiast</h3>
    </open>
    <img style={imgStyle} src='obackground.png' ></img>
    <div className='desBox'>
    <center>
    <div className="boxe">
    <h1 style={{color:"white"}}>Choose Your Destination</h1><br /><br />
    <select id="yourloc">
    <option value="Your Location">Your Location</option>
    <option value="Newyork">Newyork</option>
    <option value="Marutius">Marutius</option>
    <option value="Maldives">Maldives</option>
    <option value="Switzerland">Switzerland</option>
    </select>
    <br></br><br></br>
    <select id="destination">
    <option value="Your Location">Your Destination</option>
    <option value="Newyork">Newyork</option>
    <option value="Marutius">Marutius</option>
    <option value="Maldives">Maldives</option>
    <option value="Switzerland">Switzerland</option>
    </select>
    <br></br><br></br><br></br>
    <Link to="/home"><button id="enter" type='submit'>ENTER</button></Link>
    </div>
    </center>
    </div>

    </div>
  )
}
export default FirstNav
