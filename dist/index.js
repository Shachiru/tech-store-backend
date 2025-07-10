"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file
// 2. Define the app port
const port = process.env.PORT || 3000; // Access the PORT environment variable
// 4. Instruct the express app to listen on port 3000
app_1.default.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
