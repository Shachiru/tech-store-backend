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

}

export const getContact = (req:Request, res:Response) => {

}

export const updateContact = (req:Request, res:Response) => {

}

export const deleteContact = (req:Request, res:Response) => {}