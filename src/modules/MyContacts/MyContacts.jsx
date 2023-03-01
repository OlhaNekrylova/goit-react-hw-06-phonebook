import { useSelector, useDispatch } from "react-redux";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import { addContact, deleteContact } from "../../redux/contacts/contacts-slice";
import {setFilter} from "../../redux/filter/filter-slice";

import { getAllContacts, getFilteredContacts } from "../../redux/contacts/contacts.selectors";
import {getFilter} from "../../redux/filter/filter-selectors";

import styles from "./MyContacts.module.css";

const MyContacts = () => {
    const filteredContacts = useSelector(getFilteredContacts);
    const allContacts = useSelector(getAllContacts);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const isDublicate = (name, number) => {
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();
        const result = allContacts.find(({ name, number }) => {
            return (name.toLowerCase() === normalizedName && number.toLowerCase() === normalizedNumber)
        })

        return Boolean(result)
    }

    const handleAddContact = ({ name, number }) => {
        if (isDublicate(name)) {
            alert(`${name} is already in contacts.`);
            return false;
        }

        if (isDublicate(number)) {
            alert(`This phone number is already in contacts.`);
            return false;
        }

        dispatch(addContact({ name, number }));
    }

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    const handleFilter = ({ target }) => {
        dispatch(setFilter(target.value))
    };

    const isContacts = Boolean(filteredContacts.length);

    return (
        <div>
            <h1>Phonebook</h1>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <h2>Add contact</h2>
                    <ContactForm onSubmit={handleAddContact} />
                </div> 
                <div className={styles.block}>
                    <Filter value={filter} handleChange={handleFilter} />
                    {isContacts && <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact}  />}
                    {!isContacts && <p>No contacts in list</p>}
                </div>
            </div>
        </div>
    )
}

export default MyContacts;