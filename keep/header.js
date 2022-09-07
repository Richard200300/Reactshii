import React from "react"
import memeData from "./memedata"
let url ;
export default function Head() {
    function getNewImage() {
    const memesArray = memeData.data.memes
    const randomNumber  = Math.floor(Math.random() * memesArray.length)
     url = memesArray[randomNumber].url
    console.log(url)
    }
    return (
        <div className="head-container">
                <div className="input-flex">

                    <input type="text" className="input" placeholder="Shut up" />
                    <input type="text" className="input" placeholder="and take my money" />
                </div>
                <button onClick={getNewImage}className="btn">Get a new meme image✨</button>
                <p>{url}</p>

        </div >
    )
}