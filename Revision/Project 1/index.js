import React from "react"
import ReactDOM from "react-dom"
import Info from "./nav"
import About from "./head"
import Footer from "./footer"
import "./index.css"


ReactDOM.render(
  <div className="container">
    <Info />
    <About />
    <Footer />
  </div>,document.getElementById("root")
)