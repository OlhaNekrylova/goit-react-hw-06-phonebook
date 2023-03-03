import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import styles from "./MyContacts.module.css";

const MyContacts = () => {

    return (
        <div>
            <h1>Phonebook</h1>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <ContactForm 
                    // onSubmit={handleAddContact}
                    />
                </div> 
                <div className={styles.block}>
                    <h2>Contacts</h2>
                    <Filter 
                    // value={filter} handleChange={handleFilter} 
                    />
                    <ContactList />
                    {/* {isContacts && <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact}  />}
                    {!isContacts && <p className={styles.text}>No contacts in list</p>} */}
                </div>
            </div>
        </div>
    )
}

export default MyContacts;