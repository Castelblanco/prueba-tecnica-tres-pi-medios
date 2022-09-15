"use strict";

const Sales = require("../database/models/sales");

exports.salesDays = async d =>{
    let netoTotal = 0;

    const dateBetween = new Date(),
          dateUntil = new Date(dateBetween);

    dateUntil.setDate(dateUntil.getDate() -d);

    const sales = await Sales.find({
        $and: [
            {
                sale_at: {
                    $gte: new Date(dateUntil.toDateString()),
                    $lt: new Date(dateBetween.toDateString())
                }
            }
        ]
    }).populate(["products_id", "users_id"]);

    const salesDate = sales.map(v =>{
        let subTotal = v.qty * v.products_id[0].price;
        netoTotal += subTotal;

        return {
            _id: v.id,
            sale_at: v.sale_at,
            qty: v.qty,
            products_id: v.products_id,
            users_id: v.users_id,
            subTotal
        }
    });

    return {salesDate, netoTotal};
}