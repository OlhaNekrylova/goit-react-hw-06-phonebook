import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-slice";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

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

    // const isDublicate = (name, number) => {
    //     const normalizedName = name.toLowerCase();
    //     const normalizedNumber = number.toLowerCase();
    //     const result = allContacts.find(({ name, number }) => {
    //         return (name.toLowerCase() === normalizedName && number.toLowerCase() === normalizedNumber)
    //     })

    //     return Boolean(result);
    // }

    // const handleAddContact = ({ name, number }) => {
    //     if (isDublicate(name, number)) {
    //         alert(`${name} and ${number} are already in contacts.`);
    //         return false;
    //     }

    //     dispatch(addContact({ name, number }));
    // }
    
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
                    />
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
                    />
                </label>
                    
                <button className={css.button}  type='submit'>
                    Add contact
                </button>
            </form>
        );
    };

export default ContactForm;
// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };