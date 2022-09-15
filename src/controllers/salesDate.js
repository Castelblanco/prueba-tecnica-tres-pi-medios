"use strict";

const { salesDays } = require("../libs/salesDays");

async function salesDay(req, res){
    const sales = await salesDays(1);
    res.json(sales);
}

async function salesMonth(req, res){
    const sales = await salesDays(31);
    res.json(sales);
}

module.exports = {
    salesDay,
    salesMonth
}