"use strict";

const Roles = require("../database/models/roles");

async function getRoles(req, res){
    const roles = await Roles.find();
    res.json(roles);
}

async function postRoles(req, res){
    const newRole = new Roles(req.body);
    await newRole.save();
    res.json({success: "Role creado"});
}

module.exports = {
    getRoles,
    postRoles
}