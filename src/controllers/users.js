"use strict";

const Users = require("../database/models/users");

async function getUsers(req, res){
    const users = await Users.find().populate("roles_id");
    res.json(users);
}

async function getUsersId(req, res){
    const { document } = req.params,
          user = Users.findOne({document});

    res.json(user);
}

async function postUser(req, res){
    try{
        const newUser = new Users(req.body);

        await newUser.save();

        res.status(201).json({success: "Usuario creado"});
    }catch(e){
        if (e.code === 11000)
        return res.status(400).json({failed: "El numero de documento ya existe"});
    }
}

async function deleteUser(req, res){
    const { id } = req.body;
    await Users.findByIdAndDelete(id);

    res.json({success: "Usuario borrado"});
}

module.exports = {
    getUsers,
    getUsersId,
    postUser,
    deleteUser
}