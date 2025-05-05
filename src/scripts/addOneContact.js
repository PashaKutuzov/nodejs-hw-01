import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
export const addOneContact = async () => {
     await writeContacts([...await readContacts(), createFakeContact()]);
};

addOneContact();
