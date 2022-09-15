"use strict";

const Roles = require("./models/roles"),
      dataRoles = ["admin", "employee", "everyone"];

(async ()=>{
    const roles = await Roles.find();
    
    if (roles.length !== 0) return;
    for (let i = 0; i < dataRoles.length; i++) {
        const role = dataRoles[i],
              newRole = new Roles({name: role});

        await newRole.save();
    }

    console.log("create roles");
}
)();