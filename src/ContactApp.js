import React from "react"
import ContactCard from "./ContactCard"
function ContactApp() {
    return (
        <div className="contact-cards">
            <ContactCard
                contact={{
                    imgURL: "http://placekitten.com/200/300",
                    name: "ABC",
                    phone: "123",
                    email: "abc@gmail.com"
                }}
            />

            <ContactCard
                contact={{
                    imgURL: "http://placekitten.com/400/300",
                    name: "DEF",
                    phone: "456",
                    email: "def@gmail.com"
                }}
            />

            <ContactCard
                contact={{
                    imgURL: "http://placekitten.com/200/400",
                    name: "GHI",
                    phone: "789",
                    email: "ghi@gmail.com"
                }}
            />
        </div>
    )
}

export default ContactApp