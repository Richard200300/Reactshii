import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Richard",
        lastName: "Esan",
        phone: "+234 90 7929-2342", 
        email: "esanrichard2@gmail.com",
        isFavorite: false
    })
    let testing = contact.isFavorite ? "testing-working" : "testing-stilworking"
    function toggleFavorite() {
        setContact ( prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
        
    }

return  (

        <>
        <div onClick={toggleFavorite} className="main-container">
          <div className="profile-img">
    
          </div>
          <div className="star"></div>
          <h1>{contact.firstName} {contact.lastName}</h1>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <p>{testing}</p>
        </div>
      </>
    )
}