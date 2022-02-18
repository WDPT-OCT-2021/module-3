import React from "react";
import { useParams } from "react-router-dom";

export default function Contact(props) {
    // console.log({ props: props.contacts, params: useParams() });
    const contactId = Number(useParams().contactId);
    const contactDetails = props.contacts.find(
        (contact) => contact.id === contactId
    );

    // console.log({ contactDetails, contactId });
    return (
        <div>
            <h3>{contactDetails?.name} has won a new car!!</h3>
        </div>
    );
}
