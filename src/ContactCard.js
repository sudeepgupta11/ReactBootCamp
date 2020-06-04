import React from "react"

function ContactCard(props){
    return(
        <div className="contact-card">
            <img src={props.contact.imgURL} />
            <h1>{props.contact.name}</h1>
            <h3>{props.contact.phone}</h3>
            <h3>{props.contact.email}</h3>

        </div>
    )
}

export default ContactCard