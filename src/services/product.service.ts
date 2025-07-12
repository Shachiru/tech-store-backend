// import {Product} from "../model/product.model";
import Product from "../model/product.model"
import {ProductDTO} from "../dto/product.dto";

// get all product service logic
export const getAllProducts = async (): Promise<ProductDTO[]> => {
    // return productList;
    return Product.find();
}

export const saveProduct = async (product: ProductDTO) => {    // passing the product object
    /*productList.push(product);
    return product;*/
    return Product.create(product);
}

export const getProductById = async (id: number): Promise<any> => {  // id is a number type
    return Product.findOne({id: id});
}

export const updateProduct = async (id: number, data: ProductDTO) => {
    /*const product = productList.find(product => product.id === id);*/

    const product = await Product.findOneAndUpdate({id: id}, data, {new: true});

    if (!product) {
        return null;
    }
    return product;     // return the updated product
}

export const deleteProduct = async (id: number) => {
    /*const index = productList.findIndex(product => product.id === id);
    if (index === -1) {
        return false;   // the product isn't found because the index is -1
    } else {
        productList.splice(index, 1);    // delete product by index
        return true;
    }*/

    await Product.deleteOne({id: id});
    return true;
}

export const validateProduct = (product: ProductDTO) => {
    if (!product.id || !product.name || !product.price || !product.currency || !product.image) {
        return "All fields are required";
    }
    return null;
}