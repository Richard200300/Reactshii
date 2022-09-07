import React from "react";
import ReactDOM from "react-dom"
import Nav from './nav'
import App from "./app";
import "./index.css"

ReactDOM.render(
    <div className="main-container">
        <Nav />
        <App />
    </div>,document.getElementById("root")
)