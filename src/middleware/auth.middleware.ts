import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();   // Load environment variables from .env file

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({
            error: 'Auth token is not present in request headers!'
        });
        return;
    }
    jwt.verify(token, JWT_SECRET, (error, user) => {
        if (error) {
            res.status(403).json({
                error: 'Invalid or expired token!'
            });
            return;
        }
        (req as Request & { user?: any }).user = user;
        next();
    });
}

// Middleware to check if the user has the required role (ADMIN or CUSTOMER)
export const authorizeRoles = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as Request & { user?: any }).user;

        // check if the user is authenticated and has the required role
        if (!user || !roles.includes(user.role)) {
            res.status(403).json({    // 403 - unauthorized
                error: 'Access denied! User does not have permission to perform this operation.'
            });
            return;    // exit the middleware / break the flow
        }
        next();
    }
}