"use strict";

const { Schema, model } = require("mongoose"),
      newSchema = new Schema({
        name: {type: String},
        description: {type: String},
        price: {type: Number}
      },
      {
        versionKey: false
      });

module.exports = model("products", newSchema);