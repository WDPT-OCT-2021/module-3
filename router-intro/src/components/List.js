import React from "react";
import { Link } from "react-router-dom";

export default function List({ contacts }) {
    // you'll notice from the app.js we pass props as contacts to this component. We can destructure the props.contacts in the parameter for this component as shown above ({contacts})
    console.log({ contacts });
    return contacts.map((contact) => {
        return (
            <div key={contact.id}>
                <h3>
                    {contact.name} {contact.isStudent ? "is" : "is not"} a
                    student who's favorite color is {contact.favColor}
                </h3>
                <Link to={`/about/${contact.id}`}>{contact.name} reward!</Link>
            </div>
        );
    });
}
