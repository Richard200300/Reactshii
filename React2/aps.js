import React from "react"
import Card from "./card"
import joedata from "./jokesData"
import Navbar from "./nav"
export default function Aps() {
    const jokeElements = joedata.map(jokes => {
        return <Card
            key ={jokes.id} 
            jokes={jokes}  
            // name={jokes.name}
            // dollar={jokes.dollar}
            // country={jokes.country}
            // rating={jokes.rating}
            // reviewCount={jokes.reviewCount}
            // img={jokes.img}
            // openSpots={jokes.openSpots}
            // location={jokes.location}
        />
    })
    return (
        <div>
            < Navbar />
            <div className="cont-flex">
                {jokeElements}
            </div>


        </div>
    )
}