"use strict";

const { checkRol } = require("../libs/checkRols");

exports.checkAdmin = async (req, res, next)=>{
    try{
        const {failed} = await checkRol("admin", req.headers);

        if (failed) throw failed;
        
        next();
    }catch(e){
        res.status(400).json({failed: e});
    }
}