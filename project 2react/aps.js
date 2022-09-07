import React from "react"
import ReactDOM from "react-dom"
import traveldata from "./traveldata"
import Navbar from "./nav"
import Hero from "./hero"

export default function App() {
    const travelElement = traveldata.map(data => {
        return <Hero
            key={data.id}
            data={data}
        />
    })
    return (
        <div>
            <Navbar />
            {travelElement}
        </div>

    )
}