import React from 'react'
import "./Home.css"
import HomeNav from './NavBar'
import { Link } from 'react-router-dom'
function Home_Body() {
  return (
    <div>
    <div className='Nav'>
        <HomeNav/>
    </div>
        <div className="body-home">
            <div className='offlinemap'>
            <Link to ="/map"><img src="./map1.png" height="280px" width="210"/></Link>
            <Link to ="/map"><h3 className='desc'>Offline Map</h3></Link>
            </div>
            <div className='review'>
            <Link to="/review"><img src="./review.jpg" height="280px" width="210"/></Link>
            <Link to=""><h3 className='desc'>Review</h3></Link>
            </div>
            <div className='calculate'>
            <Link to ="/calculator"><img src="./calc2.png" height="280px" width="210"/></Link>
            <Link to ="/calculator"><h3 className='desc'>Convertor</h3></Link>
            </div>
            <div className='lang'>
            <Link to ="/language_help"><img src="./lang.jpg" height="280px" width="210"/></Link>
            <Link to ="/language_help"><h3 className='desc'>Lang Help</h3></Link>
            </div>
            <div className='info'>
            <Link to="/information"><img src="./rules.jpg" height="280px" width="210"/></Link>
            <Link to="/information"><h3 className='desc'>Information</h3></Link>
            </div>
    </div>
    </div>

  )
}

export default Home_Body
