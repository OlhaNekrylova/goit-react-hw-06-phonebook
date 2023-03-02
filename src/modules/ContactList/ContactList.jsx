import { useSelector, useDispatch } from "react-redux";
import React from 'react';
import PropTypes from 'prop-types';

import { deleteContact } from "../../redux/contacts/contacts-slice";

import { getAllContacts, getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import {getFilter} from "../../redux/filter/filter-selectors";

import css from './ContactList.module.css';

const ContactList = () => {
    const allContacts = useSelector(getAllContacts);
    const filter = useSelector(getFilter);
    // const filteredContacts = useSelector(getFilteredContacts);

    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    const contactList = filter ? getFilteredContacts (allContacts, filter) : allContacts;
    // const contactList = filteredContacts;

    return (
        <ul className={css.list}>
            {contactList.map(({ id, name, number }) => (
                <li 
                key={id}
                className={css.item}>
                <p className={css.info}>{name}: {number}</p>
                <button
                    className={css.button}
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


ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;