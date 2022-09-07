import React from "react"
import ReactDOM from "react-dom"
import Nav from "./nav"
import Hero from "./hero"
import App from "./app"
import "./index.css"

ReactDOM.render(
    <div className="container">
        <Nav />
        <Hero />
        <App />

    </div>,document.getElementById("root")
)