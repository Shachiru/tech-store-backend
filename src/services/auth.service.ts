import {User} from "../model/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

// Set to store refresh tokens
const refreshTokens = new Set<string>();

const adminUser: User = {
    id: 1,
    username: "admin",
    // bcryptjs is used to hash the password
    // salt value is used to encrypt the password
    password: bcrypt.hashSync("1234", 10),
    role: "ADMIN"
}

const customerUser: User = {
    id: 2,
    username: "sunil",
    password: bcrypt.hashSync("customer123", 10),
    role: "CUSTOMER"
}

const userList: User[] = [];
userList.push(adminUser);
userList.push(customerUser);

export const authenticateUser = (username: string, password: string) => {
    // first find the user by username
    const existingUser: User | undefined = userList.find(user => user.username === username);

    const isValidPassword = undefined != existingUser && bcrypt.compareSync(password, existingUser.password);

    if (!existingUser || !isValidPassword) {
        return null;
    }

    const accessToken = jwt.sign({
            id: existingUser.id,
            username: existingUser.username,
            role: existingUser.role
        },
        JWT_SECRET,
        {expiresIn: "5m"}
    );

    const refreshToken = jwt.sign({
            username: existingUser.username,
        },
        REFRESH_TOKEN_SECRET,
        {expiresIn: "7d"}
    );
    refreshTokens.add(refreshToken);
    return {accessToken, refreshToken}
}