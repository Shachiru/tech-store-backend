import {Router} from "express";
import {deleteContact, getAllContacts, getContact, saveContact, updateContact} from "../controllers/contact.controller";


const contactRouter: Router = Router();

contactRouter.get("/all", getAllContacts);
contactRouter.post("/save", saveContact);
contactRouter.get("/:id", getContact);
contactRouter.put("/update/:id", updateContact);
contactRouter.delete("/delete/:id", deleteContact);

export default contactRouter;
