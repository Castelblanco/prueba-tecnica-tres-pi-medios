"use strict";

const Products = require("../database/models/products");

async function getProducts(req, res){
    const products = await Products.find();
    
    res.json(products);
}

async function postProducts(req, res){
    const newProduct = new Products(req.body);
    await newProduct.save();

    res.json({success: "Producto creado"});
}

module.exports = {
    getProducts,
    postProducts
}