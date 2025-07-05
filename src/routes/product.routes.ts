import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";

const productRouter: Router = Router();

// Handle the requests
productRouter.get("/all", getAllProducts);   // get all products
productRouter.post("/save", saveProduct);  // save a new product
productRouter.get("/:id", getProduct);   // get a single product by id
productRouter.put("/update/:id", updateProduct);   // update a product
productRouter.delete("/delete/:id", deleteProduct);   // delete a product

export default productRouter;    // export the router to app.ts