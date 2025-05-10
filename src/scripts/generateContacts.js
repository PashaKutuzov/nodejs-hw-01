import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    let contacts = await readContacts();

    for (let index = 0; index < number; index++) {
 contacts.push(createFakeContact());
    }

await writeContacts(contacts);
};

generateContacts(5);
