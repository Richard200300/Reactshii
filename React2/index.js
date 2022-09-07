import React from "react"
import ReactDom from "react-dom"
import Aps from "./aps"
import Hero from "./Hero"
import "./index.css"


ReactDom.render(
    <div>
     <Aps /> 

    </div>,
    document.getElementById("root")

)


// import  Navbar from "./nav" 
// import Hero from "./Hero"
// import Card from "./card"
// import "./index.css"
// ReactDom.render(
//    <div>
//     <Navbar /> 
//     <Hero />
 
//     <div className="Props-card-fle x">
//     <Card 
//         name= "Richard"
//         dollar = {135}
//         country = "Nigeria"
//         rating = {9}
//         reviewCount = {2}

//     />
//     <Card 
//      name= "Samuel"
//      dollar = {140}
//      country = "France"
//      rating = {1}
//      reviewCount = {1}
//      />
//     <Card 
//      name= "Isaac"
//      dollar = {13}
//      country = "Angola"
//      rating = {5}
//      reviewCount = {4}
//     />
//     <Card 
//      name= "Queen"
//      dollar = {49}
//      country = "Ghana"
//      rating = {7}
//      reviewCount = {9}
//     />
//     </div>

//    </div> 
//     ,document.getElementById("root")
// )