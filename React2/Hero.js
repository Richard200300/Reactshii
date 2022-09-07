import React from "react"
import Reactimg from "./image.jpg"

export default function Hero() {
    return (
        <div class="hero-container">
            <img src={Reactimg} className="bg-img" />
            <h1>Online Experiences</h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit fugit itaque expedita quis, labore voluptas
                distinctio iure amet soluta perferendis optio. Veritatis fugit
                tenetur quas ex ipsa, dolore eligendi minus.</p>
        </div>
    )


} 