import {Request, Response} from "express";
import * as contactService from "../services/contact.service"

export const getAllContacts = (req:Request, res:Response) => {
    try {
        const contacts = contactService.getAllContacts();
        res.status(200).json(contacts);     // set status code to 200 OK
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"});   // set status code to 500 Internal Server Error
    }
}

export const saveContact = (req:Request, res:Response) => {
    try {
        const newContact = req.body;
        const validationError = contactService.validateContact(newContact);
        if (validationError) {
            res.status(400).json({error: validationError});
            return;
        }
        const savedContact = contactService.saveContact(newContact);
        res.status(201).json(savedContact);    // set status code to 201 Created
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"});   // set status code to 500 Internal Server Error
    }
}

export const getContact = (req:Request, res:Response) => {
    try {
        const contactId = parseInt(req.params.id);
        if (isNaN(contactId)){
            res.status(400).json({error: "Invalid contact id"});
            return;
        }
        const contact = contactService.getContactById(contactId);
        if (!contact){
            res.status(404).json({error: "Contact not found"});
            return;
        }
        res.status(200).json(contact);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"});   // set status code to 500 Internal Server Error
    }
}

export const updateContact = (req:Request, res:Response) => {}

export const deleteContact = (req:Request, res:Response) => {}