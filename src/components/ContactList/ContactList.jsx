import React from 'react';
import { FcFullTrash } from "react-icons/fc";
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.contact} key={id}>
        <p>{name}:</p>
        <p>{number}</p>
        <button
          className={s.btn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          <span>Delete</span> <FcFullTrash/>
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf
    (PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    })),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
