import React from "react"

export default function Card(props) {
    let badgeText 
    if (props.card.openSpots === 0) {
        badgeText= "Sold OUT"
    } else if (props.card.location === "ONLINE") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card-container">
          
            <img src={props.card.img} className="card-img"/>
            <div>
            <span className="bold">{props.card.rating}</span>
            <span className="span-list" >({props.card.reviewCount}) *</span>
            <span className="span-list">{props.card.country}</span>
           
            </div>
            <p>{props.card.title}</p>
            <p><span className="bold">From ${props.card.price}</span> / person</p>
           {badgeText && <div className="sold">{badgeText}</div>}
        </div>

    )
}