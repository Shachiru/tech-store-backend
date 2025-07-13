import {Router} from "express";
import {authenticateUser} from "../controllers/auth.controller";

// Define a router for handling authentication routes
const authRouter: Router = Router();

authRouter.post("/login", authenticateUser);

export default authRouter;