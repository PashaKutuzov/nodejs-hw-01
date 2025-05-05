import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const fileData = await fs.readFile(PATH_DB, 'utf-8')
        const contacts = JSON.parse(fileData)

        if (!Array.isArray(contacts)) {
            throw new Error('Error')
        }
        return contacts
    } catch (error) {
console.log(error);

    }
};
