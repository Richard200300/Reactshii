import React from "react"

export default function Box(props) {
    const style = {
        backgroundColor: props.on ? "black" : "white "
    }
    return (
        <div  
        style={style} 
        className="box" 
        onClick={()=>props.toggle(props.id)}>

        </div>
    )

}