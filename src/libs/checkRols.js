"use strict";

const Users = require("../database/models/users");

exports.checkRol = async (rol, user) =>{
    try{
        const { user_id } = user,
              userFind = await Users.findById(user_id).populate("roles_id");

        if (userFind.roles_id[0].name === rol) return {success: true};
        
        return {failed: "Acción dennegada, no tienes el rol necesario"};
    }catch(e){
        return {failed: "Este usuarion no existe"};
    }
}