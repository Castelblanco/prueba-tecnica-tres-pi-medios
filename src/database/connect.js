"use strict";

const mongoose = require("mongoose");
require("dotenv").config();

(async ()=>{
    try{
       await mongoose.connect(process.env.CONNECT_DB);
       console.log("connect with db");
    }catch(e){
        console.log("error with db");
        console.log(e);
    }
}
)();