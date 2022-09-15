"use strict";

const Sales = require("../database/models/sales");

async function getSales(req, res){
    const sales = await Sales.find().populate(["products_id", "users_id"]);

    res.json(sales);
}

async function postSales(req, res){
    const newSale = new Sales(req.body);
    await newSale.save();

    res.json({success: "Venta creada"});
}

async function putSales(req, res){
    const { id } = req.body,
          updateSale = await Sales.findByIdAndUpdate(id, req.body, {new: true});

    res.json(updateSale);
}

async function deleteSale(req, res){
    const { id } = req.body;
    await Sales.findByIdAndDelete(id);

    res.json({success: "Venta Borrada"});
}

module.exports = {
    getSales,
    postSales,
    putSales,
    deleteSale
}