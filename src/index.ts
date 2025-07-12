import app from "./app";
import dotenv from "dotenv";
import DBConnection from "./db/DBConnection";

dotenv.config();    // Load environment variables from .env file

// 2. Define the app port
const port = process.env.PORT || 3000;     // Access the PORT environment variable

DBConnection().then(result => console.log(result));     // Call the DBConnection function

// 4. Instruct the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});