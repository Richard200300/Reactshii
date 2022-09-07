import React from "react"


export default function Head() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "1 (719) 555-1212",
        email: "esanrichard2@gmail.com",
        isFavourite: true
    })
  let starIcon = contact.isFavourite ? "empty-icon" : "filled-icon"
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
        <div onClick={toggleFunc}>{starIcon}</div>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    )
}