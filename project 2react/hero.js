import React from "react"
import ReactDOM from "react-dom"

export default function Hero(props) {
    return (
        <div className="Hero">
            <div className="main-flex">
                <img src={props.data.img} className="img" />
                <div className="main1-flex">
                    <div class="mini-flex">
                        <p>{props.data.location}</p>
                        <a href="#">Views on George Maps</a>
                    </div>
                    <h1>{props.data.title}</h1>
                    <p className="date"><strong>{props.data.startDate} - {props.data.endDate}</strong></p>
                    <p className="main-text">{props.data.description}</p>
                </div>
            </div>
        </div>
    )
}