import React from "react"


export default function Ap() {
    const thingsArray = ["thing 1", "Thing 2"]
    const mapping = thingsArray.map( things => {
            <p>{things}</p>
    })


    return (
        <div>
            <button>And Items</button>
           {mapping}

        </div>
    )
}