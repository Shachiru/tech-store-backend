/*
export interface Product {
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
}*/

import mongoose from "mongoose";

const ProductModel = new mongoose.Schema(
    {
        "id": {
            required: true,
            type: Number,
            unique: true,
            index: true
        },
        "name": {
            required: true,
            type: String,
            unique: true  // for better performance
        },
        "price": {
            required: true,
            type: Number
        },
        "currency": {
            required: true,
            type: String
        },
        "image": {
            required: true,
            type: String
        }
    }
);

const Product = mongoose.model('Product', ProductModel);

export default Product;