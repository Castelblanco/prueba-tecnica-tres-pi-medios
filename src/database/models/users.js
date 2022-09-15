"use strict";

const { Schema, model } = require("mongoose"),
      newSchema = new Schema({
        name: {type: String},
        last_name: {type: String},
        document: {type: String, unique: true},
        roles_id: [{
            type: Schema.Types.ObjectId,
            ref: "roles"
        }]
      }, {
        versionKey: false
      });

module.exports = model("users", newSchema);