import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
    try {
    const json = JSON.stringify(updatedContacts, undefined, 2);
    await writeFile(PATH_DB, json, 'utf8');
  } catch (error) {
    console.error('Failed to write contacts:', error.message);
    throw error;
  }
};
