import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-slice";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";

import styles from './ContactForm.module.css';

const ContactForm = () => {
    const allContacts = useSelector(getAllContacts);
    
    const dispatch = useDispatch();

    const handleAddContact = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        const newContact = { name, number };

        const isPresentContact = allContacts.find(element => 
            element.name.toLowerCase() === newContact.name.toLowerCase()
        ) ? true: false;
        
        if (isPresentContact){
            alert(`${newContact.name} is already in contacts.`)
        } else {
            dispatch(addContact(newContact));
            form.reset();
        }        
    }

    return (
            <form className={styles.form} onSubmit={handleAddContact}>
                <label className={styles.label}> 
                    Name
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                    
                <label className={styles.label}>
                    Number
                    <input
                        className={styles.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                    
                <button className={styles.button}  type='submit'>
                    Add contact
                </button>
            </form>
        );
    };

export default ContactForm;