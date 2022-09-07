import React from "react"
export default function Staite() {
const[increment, setIncrement] = React.useState(1)

function add(){
    setIncrement(prevIncrement => prevIncrement + 1)
}
function sub() {
    setIncrement(prevIncrement => prevIncrement - 1)
}
    return (
        <div>
            <div className="circle-container">
 
                <h1>{increment}</h1>
                <button onClick={sub}className="btn-1">-</button>
                <button onClick={add}className="btn-2">+</button>
            </div>

        </div>
    )
} 