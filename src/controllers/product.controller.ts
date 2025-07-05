import {Request, Response} from "express";
import * as productService from "../services/product.service"

// controller function to handle get all products
export const getAllProducts = (req: Request, res: Response) => {
    try {
        const products = productService.getAllProducts();
        res.status(200).json(products);     // set status code to 200 OK
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"});   // set status code to 500 Internal Server Error
    }
}

export const saveProduct = (req: Request, res: Response) => {
    try {
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct);     // verify if the product is valid
        if (validationError) {
            res.status(400).json({error: validationError});     // set status code to 400 Bad Request
            return;
        }
        const savedProduct = productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);    // set status code to 201 Created
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"});   // set status code to 500 Internal Server Error
    }
}

export const getProduct = (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            res.status(400).json({error: "Invalid product id"});   // set status code to 400 Bad Request
            return;
        }
        const product = productService.getProductById(productId);
        if (!product) {
            res.status(404).json({error: "Product not found"});
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"});   // set status code to 500 Internal Server Error
    }
}

export const updateProduct = (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            res.status(400).json({error: "Invalid product id"});
            return;
        }
        const updatedData = req.body;
        productService.updateProduct(productId, updatedData);
        if (!updateProduct) {
            res.status(404).json({error: "Product not found"});
            return;
        }
        res.status(200).json(updatedData);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"});   // set status code to 500 Internal Server Error
    }
}

export const deleteProduct = (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)) {
        res.status(400).json({error: "Invalid product id"});
        return;
    }
    const deletedProduct = productService.deleteProduct(productId);
    if (!deletedProduct) {
        res.status(404).json({error: "Product not found"});
        return;
    }
    res.status(200).json({message: "Product deleted successfully"});
}