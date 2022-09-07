import React from "react"
import Starimage from "./starImage"

export default function Head() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "1 (719) 555-1212",
        email: "esanrichard2@gmail.com",
        isFavourite: false
    })

    function toggleFunc() {
        setContact(prevContact => {
            return { 
                ...prevContact,
                isFavourite: !prevContact.isFavourite
            }
        })
    }
    return (
        <div>
            <div className="img-container">
                <img src="./image.jpg" className="img"/>
            </div>
            <div>
            <Starimage 
            isFilled={contact.isFavourite}
            handleClick={toggleFunc}
            />
            </div>
          
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    )
}