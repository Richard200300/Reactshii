import React from "react";

export default function Main(props) {
    return (
        <div className="main-flex">

            <img src={props.data.img} className="img"/>

            <div>
            <div className="mini-flex">
            <p>{props.data.location}</p>
            <a href={props.data.map} className="map-link">views on map</a>
            </div>
            <h1 className="title">{props.data.title}</h1>
            <div className="bold">
            <span>{props.data.startDate}</span> - <span>{props.data.endDate}</span>
            </div>
            <p>{props.data.description}</p>
             </div>

        </div>
    )
}