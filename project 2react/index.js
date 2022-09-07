import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./nav"
import Hero from "./hero"
import "./index.css"
import App from "./aps"


ReactDOM.render(
    <div>
        <App />
    </div>
    , document.getElementById("root")
)
import React from "react"
import ReactDOM from "react-dom"
// import Navbar from "./nav"
// import Head from "./header"
// import Ap from "./learn"
// import "./index.css"
// import App from "./learn"
// let thingsArray = ["Thing 1", "Thing 2"]


 function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])


    function additem() {
        const newThingText = `Thing ${things.length + 1} `
        setThings(prevState => [...prevState, newThingText])
    }
    const thingsElement = things.map(thing => <p key={thing}>{thing}</p>)
    return (
        <div>
            <button onClick={additem}>And Items</button>
           {thingsElement}
                
        </div>
    )
 }
ReactDOM.render(
    <div className="meme-container">
        <App />
        <h1>My GOd</h1>
    </div>,
    document.getElementById("root")
)