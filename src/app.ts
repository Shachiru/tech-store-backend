import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";
import authRoutes from "./routes/auth.routes";

// 1. Initialize the express app
const app: Express = express();

// 2. Define Middlewares
// instruct to parse the request payload data to be converted to JSON format
app.use(express.json());

// app.use(cors());    // Enable/Allow CORS

const allowedOrigins = [
    "http://localhost:5173"
];

const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {        // allow requests from any origin/ check POSTAMAN
            callback(null, true);    // allow the request
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}

app.use(cors(corsOptions));    // Enable/Allow CORS

app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/contact", contactRoutes)

// 3. Define a simple HTTP GET request
/*
app.get('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello World shachiru!");
});
*/

export default app;