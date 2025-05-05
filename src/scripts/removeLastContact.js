import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from "../utils/writeContacts.js";
export const removeLastContact = async () => {
    const contacts = await readContacts()
    if (contacts.length === 0) {
        return console.log('no contacts');

    }
    else {
        return writeContacts(contacts.slice(0, -1)) ;
    }
};

removeLastContact();
