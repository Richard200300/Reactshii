import React from "react"
import memeData from "./memeData"

export default function Main() {
const [meme, setMeme] = React.useState({
    TopText: "",
    BottomText: "",
    RandomImage: "https:\/\/i.imgflip.com\/30b1gx.jpg"
})
const [allMemeImages, setAllMemeImages]= React.useState(memeData) 

    function getMemeImage() {
        const newArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * newArray.length)
        const url = newArray[randomNumber].url
        setMeme(prevMeme=>  ({
            ...prevMeme,
            RandomImage: url,
            
        }))
        
    }
    return (
        <div className="main-cont">
            <div className="input-flex">
                <input type="text" className="input" />
                <input type="text" className="input" />
            </div>
           
            <button onClick={getMemeImage}className="btn">Get a new meme image🖼🖼</button>
            <img src={meme.RandomImage} alt ="useless-meme"className="img"/>
        </div>
    )
}