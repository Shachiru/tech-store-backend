import {contactList} from "../db/db";
import {Contact} from "../model/contact.model";
import {Product} from "../model/product.model";

export const getAllContacts = (): Contact[] => {
    return contactList;
}

export const saveContact = (contact: Contact): Contact => {
    contactList.push(contact);
    return contact;
}

export const getContactById = (id: number): Contact | undefined => {
    return contactList.find(contact => contact.id === id);
}

export const updateContact = (id:number, data: Product) => {
    const contact = contactList.find(contact => contact.id === id);
    if (!contact){
        return null;
    }
    Object.assign(contact, data);
    return contact;
}

export const deleteContact = (id: number) => {
    const index = contactList.findIndex(contact => contact.id === id);
    if (index === -1){
        return false;
    } else {
        contactList.splice(index, 1);
        return true;
    }
}

