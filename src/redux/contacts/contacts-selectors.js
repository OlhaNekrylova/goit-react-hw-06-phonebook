export const getAllContacts = store => store.contacts;

export const getFilteredContacts = (contacts, filterName) => {
    return contacts.filter(contact =>      
        contact.name.toLowerCase().includes(filterName.toLowerCase()))
}; 
