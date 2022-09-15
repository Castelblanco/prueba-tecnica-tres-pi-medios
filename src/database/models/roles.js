"use strict";

const { Schema, model } = require("mongoose"),
      newSchema = new Schema({
        name: {type: String}
      }, {
        versionKey: false
      });

module.exports = model("roles", newSchema);