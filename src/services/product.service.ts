import {productList} from "../db/db";
import {Product} from "../model/product.model";

// get all product service logic
export const getAllProducts = (): Product[] => {
    return productList;
}

export const saveProduct = (product: Product): Product => {    // passing the product object
    productList.push(product);
    return product;
}

export const productById = (id: number): Product | undefined => {  // id is a number type
    return productList.find(product => product.id === id);
}

export const updateProduct = (id: number, data: Product) => {
    const product = productList.find(product => product.id === id);
    if (!product) {
        return null;
    }
    Object.assign(product, data);
    return product;
}

const deleteProduct = (id: number) => {
    const index = productList.findIndex(product => product.id === id);
    if (index === -1) {
        return false;   // the product isn't found because the index is -1
    } else {
        productList.splice(index, 1);    // delete product by index
        return true;
    }
}