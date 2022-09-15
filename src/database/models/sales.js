"use strict";

const { Schema, model } = require("mongoose"),
      newSchema = new Schema({
        sale_at: {type: Date, default: Date.now()},
        qty: {type: Number},
        products_id: [{
            type: Schema.Types.ObjectId,
            ref: "products"
        }],
        users_id: [{
            type: Schema.Types.ObjectId,
            ref: "users"
        }]
      }, {
        versionKey: false
      });

module.exports = model("sales", newSchema);