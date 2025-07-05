import express, {Express, Request, Response} from "express";

// 1. Initialize the express app
const app: Express = express();

// 2. Define Middlewares
// instruct to parse the request payload data to be converted to JSON format
app.use(express.json());

// 3. Define a simple HTTP GET request
app.get('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello World shachiru!");
});

export default app;