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
                    <ContactForm />
                </div> 
                <div className={styles.block}>
                    <h2>Contacts</h2>
                    <Filter />
                    <ContactList />
                </div>
            </div>
        </div>
    )
}

export default MyContacts;