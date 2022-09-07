import React from "react"
// import Reactpic from "./image.jpg"

export default function Card(props) {
    let badgeTest
    if (props.jokes.openSpots === 0) {
        badgeTest = "Sold Out"
    } else if (props.jokes.location === "online") {
        badgeTest = "ONLINE"
    }
    return (
        <div className="card-container">
            { badgeTest && <div className="card-badge">{badgeTest}</div>}
            <img src={props.jokes.img} className="img-bg" />
            <span>*</span>
            <span>{props.jokes.rating} </span>
            <span>({props.jokes.reviewCount}).</span>
            <span>{props.jokes.country}</span>
            <p className="lessons">{props.jokes.name}</p>
            <p><span className="money">From ${props.jokes.dollar}</span>/ person</p>


        </div>
    )
}





//  import React from "react"


// export default function Contact(props) {

//     return (
//         <div className="whi-container">
//             <img src={props.img}/>
//             <h1>{props.name}</h1>
//             <p>{props.phone}</p>
//             <p>{props.email}</p>
//         </div>
//     )
// }


