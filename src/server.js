"use strict";

const app = require("./app");

require("./database/connect");
require("./database/createdRoles");
require("./database/createdSuperUser");
require("./database/createdProducts");

app.listen(app.get("port"), ()=>{
    console.log(`server created in the ${app.get("port")}`);
})