import React from "react";
import travelData from "./travelData"
import Main from "./main";

export default function App() {
    const travelElemnt = travelData.map( data => {
        return <Main 
        data={data}
        />
    })
    
    return (
        <div>
            {travelElemnt}
        </div>
    )
}