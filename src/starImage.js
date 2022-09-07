import React from "react"

export default function Starimage(props) {
  let starIcon =  props.isFilled ? "empty-icon" : "filled-icon"
 return(  
            <div onClick={props.handleClick}>{starIcon} </div>
 )
}