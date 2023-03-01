import MyContacts from "../../modules/MyContacts/MyContacts";
import ContactForm from "../../modules/ContactForm/ContactForm";
import styles from "./HomePage.module.css";

const HomePage = ()=> {
    return (
        <div className={styles.block}>
                    <h2>Add contact</h2>
                    <ContactForm onSubmit={handleAddContact} />
                </div>
    )
}

export default HomePage;