import React from "react"
import Navbar from "./nav"
import memeData from "./memedata"

export default function Head() {

    const[randmeme, setRandmeme] = React.useState({
        topText: "",
        bottomText: "",
       randomImage: "https:\/\/i.imgflip.com\/1g8my4.jpg"})
 
    function getNewImage() {
        const newArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * newArray.length)
         const pa =  newArray[randomNumber].pa
         setRandmeme(upal)
    }
   
    return (
        <div className="D-body">

            <Navbar />
            <div className="form-container">
                <div className="input-flex">
                    <input type="text" className="input" placeholder="Top text" />
                    <input type="text" className="input" placeholder="Bottom text" />
                </div>
                <button onClick={getNewImage}>Get a new image 🎉</button>
                <img src={randmeme} className="img"/>
            </div>

        </div>

    )
}