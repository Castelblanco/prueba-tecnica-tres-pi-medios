"use strict";

const Users = require("./models/users"),
      Roles = require("./models/roles");

(async ()=>{
    const users = await Users.find();

    if (users.length !== 0) return;

    const roles = await Roles.find();

    const newUser = new Users({
        name: "Tres-Pi",
        last_name: "Medios",
        document: "1234567890",
        roles_id: roles[0].id
    });

    await newUser.save();

    console.log("created super user");
}
)();