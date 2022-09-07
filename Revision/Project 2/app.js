import React from "react";
import Card from "./card";
import bnbData from "./bnbData";

export default function App() {
    const cardELement = bnbData.map(card => {
        return <Card 
            card={card}
        />
        // return <Card 
        // img={card.img}
        // rating={card.rating}
        // reviewCount={card.reviewCount}
        // country={card.country}
        // title={card.title}
        // price={card.price}
        // openSpots={card.openSpots}
        // location={card.location}
        // />
        //option 3 you wouldn't need to put card in your card.js anymore
        //{...card}
    })
    return (
        <div className="grid-cont">
            {cardELement}
        </div>
    )

}