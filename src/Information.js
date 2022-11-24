import React from 'react'
// import Nav from './navbar'
import HomeNav from './NavBar'
import "./Information.css"
export default function Info() {
  return (

    <div className='MainBox'>
    <div>
    <HomeNav/>
    </div>
    <div className='content-box'>
    <div className="h">
      <h2 >KNOW THE RULES BEFORE YOU TRAVEL</h2>
      <ul id="k">
      <p>Wear appropriate clothes</p>
      <li>Prohibition of loud music</li>
      <li>Reserve your tickets for Eiffel Tower
      </li>
      <li>Shopping is expensive</li>
      <li>Sunday is a working day</li>
      <li>Alcohol while driving is prohibited</li>
      <li>Wear Masks</li>
      <li>Use Sunscreen</li>
      <li>Beware of pickpocketers</li>
      <li>Eating or drinking on public transport</li>

      </ul>
      </div>
      <div className="j">
      <h1 >HELPLINE</h1>
      <ul id="s">
      <li>SAMU	:  15</li>
<li>Police :   17</li>
<li>Fire   :  Brigade	18</li>
<li>Poison control center:	01 40 05 48 48</li>
<li>SOS Doctors	:36 24</li>
<li>Medical emergencies in Paris:	01 53 94 94 94</li>
<li>Lost and found:	08 21 00 25 25 - 36 rue des Morillons, 75732 Paris Cedex 15</li>
<li>Lost or stolen credit cards	:0 892 70 57 05</li>
<li>Impoundment / removal of vehicle	:08 91 01 22 22</li>
      </ul>
</div>
</div>
</div>



      )
      }
