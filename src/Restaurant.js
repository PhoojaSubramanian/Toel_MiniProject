import React from "react";
import { ReactDOM } from "react";
import Restaurant_card from "./Restaurant_card";
import './Restaurant_card.css';

function Restaurant() {
  return (
    <div className="restaurant">
        <Restaurant_card
            img="res2.webp"
            namee="Septime"
            rating= {4.9}
            ratingcount={492}
         />
        <Restaurant_card
            img="res3.webp"
            namee="Chez Casimir"
            rating={4.7}
            ratingcount={361}
        />
        <Restaurant_card
            img="res4.jpg"
            namee="Relais d'Entrecôte"
            rating={4.6}
            ratingcount={373}
        />
        <Restaurant_card
            img="res5.jpg"
            namee="Le Chateaubriand"
            rating={4.5}
            ratingcount={409}
        />
        <Restaurant_card
            img="res6.jpeg"
            namee=" Verjus"
            rating={4.5}
            ratingcount={341}
        />
        <Restaurant_card
            img="res7.webp"
            namee="Semilla"
            rating={4.4}
            ratingcount={295}
        />
        <Restaurant_card
            img="res8.webp"
            namee="L'Atelier de Joel"
            rating={4.1}
            ratingcount={389}
        />
        <Restaurant_card
            img="res9.jpg"
            namee="Les Papilles"
            rating={4.0}
            ratingcount={267}
        />
        <Restaurant_card
            img="res91.webp"
            namee="Breizh Café"
            rating={3.8}
            ratingcount={444}
        />
        <Restaurant_card
            img="res1.webp"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
    </div>
  )
}

export default Restaurant
