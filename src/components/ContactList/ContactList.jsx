import React from "react";

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
{contacts.map(({ id, name, number }) => (
            <li key={id}><p>{name}</p><p>{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </li>    
        ))}
        </ul>
);


export default ContactList;