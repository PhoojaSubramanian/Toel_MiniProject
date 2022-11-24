import React from 'react'
import { ReactDOM } from 'react'
import HomeNav from './NavBar'
import Restaurant from './Restaurant'
import Restaurant_card from './Restaurant_card'
import './Restaurant_card.css';

export default function Review_Body(){
    return(
        <div>
            <HomeNav />
        <div className='reviewbody'>
            <Restaurant />
        </div>
        </div>
    )
}
