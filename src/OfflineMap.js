import React from 'react'
import HomeNav from './NavBar'
import './OfflineMap.css';
export default function Map() {
  return (
    <div className=''>
      <div>
      <HomeNav/>
    </div>
    <div className="map">
    <img src='maps.jpeg' id="image"/>
    <button type='button' id="down">Download Offline Map</button>
    </div>
    </div>
  )
}
