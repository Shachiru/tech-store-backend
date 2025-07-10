"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const cors_1 = __importDefault(require("cors"));
// 1. Initialize the express app
const app = (0, express_1.default)();
// 2. Define Middlewares
// instruct to parse the request payload data to be converted to JSON format
app.use(express_1.default.json());
// app.use(cors());    // Enable/Allow CORS
const allowedOrigins = [
    "http://localhost:5173"
];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) { // allow requests from any origin/ check POSTAMAN
            callback(null, true); // allow the request
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};
app.use((0, cors_1.default)()); // Enable/Allow CORS
app.use("/api/products", product_routes_1.default);
// 3. Define a simple HTTP GET request
/*
app.get('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello World shachiru!");
});
*/
exports.default = app;
