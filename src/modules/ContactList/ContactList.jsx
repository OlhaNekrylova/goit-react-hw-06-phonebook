import { useSelector, useDispatch } from "react-redux";
import React from 'react';

import { deleteContact } from "../../redux/contacts/contacts-slice";

import { getAllContacts, getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import {getFilter} from "../../redux/filter/filter-selectors";

import styles from './ContactList.module.css';

const ContactList = () => {
    const allContacts = useSelector(getAllContacts);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    const contactList = filter ? getFilteredContacts (allContacts, filter) : allContacts;
    
    return (
        <ul className={styles.list}>
            {contactList.map(({ id, name, number }) => (
                <li 
                key={id}
                className={styles.item}>
                <p className={styles.info}>{name}: {number}</p>
                <button
                    className={styles.button}
                    type="button"
                    onClick={() => handleDeleteContact(id)}
                >
                Delete
                </button>
            </li>
            ))}
        </ul>
    );
};

ContactList.defaultProps = {
    items: []
}

export default ContactList;