"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const productRouter = (0, express_1.Router)();
// Handle the requests
productRouter.get("/all", product_controller_1.getAllProducts); // get all products
productRouter.post("/save", product_controller_1.saveProduct); // save a new product
productRouter.get("/:id", product_controller_1.getProduct); // get a single product by id
productRouter.put("/update/:id", product_controller_1.updateProduct); // update a product
productRouter.delete("/delete/:id", product_controller_1.deleteProduct); // delete a product
exports.default = productRouter; // export the router to app.ts
