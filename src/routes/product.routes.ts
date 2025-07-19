import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";
import {authorizeRoles} from "../middleware/auth.middleware";

const productRouter: Router = Router();

// Handle the requests
productRouter.get("/all", getAllProducts);   // get all products
productRouter.post("/save", authorizeRoles('ADMIN'), saveProduct);  // save a new product
productRouter.get("/:id", getProduct);   // get a single product by id
productRouter.put("/update/:id", authorizeRoles('ADMIN'), updateProduct);   // update a product
productRouter.delete("/delete/:id", authorizeRoles('ADMIN'), deleteProduct);   // delete a product

export default productRouter;    // export the router to app.ts