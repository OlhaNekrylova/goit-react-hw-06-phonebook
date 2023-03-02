import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-slice";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";
// import React, {useState} from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default function ContactForm () {
    // const filteredContacts = useSelector(getFilteredContacts);
    const allContacts = useSelector(getAllContacts);
    
    const dispatch = useDispatch();

    const isDublicate = (name, number) => {
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();
        const result = allContacts.find(({ name, number }) => {
            return (name.toLowerCase() === normalizedName && number.toLowerCase() === normalizedNumber)
        })

        return Boolean(result);
    }

    const handleAddContact = ({ name, number }) => {
        if (isDublicate(name, number)) {
            alert(`${name} and ${number} are already in contacts.`);
            return false;
        }

        dispatch(addContact({ name, number }));
    }
    
    return (
            <form className={css.form} onSubmit={handleAddContact}>
                <label className={css.label}> 
                    Name
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // value={name}
                        // onChange={handleChange}
                        required
                    >
                    </input>
                </label>
                    
                <label className={css.label}>
                    Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        // value={number}
                        // onChange={handleChange}
                        required
                    > 
                    </input>
                </label>
                    
                <button className={css.button}  type='submit'>
                    Add contact
                </button>
            </form>
        );
    };

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};