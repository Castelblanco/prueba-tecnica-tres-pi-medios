"use strict";

const Products = require("./models/products");
const productsJson = require("../products.json");

(async ()=>{
    const products = await Products.find();

    if (products.length !== 0) return;

    for(let i = 0; i < productsJson.length; i++){
        const indexProduct = productsJson[i],
              newProduct = new Products(indexProduct);

        await newProduct.save();
    }

    console.log("Products created");
}
)();