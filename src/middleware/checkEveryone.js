"use strict";

const { checkRol } = require("../libs/checkRols");

exports.checkEveryone = async (req, res, next)=>{
    try{
        const {failed} = await checkRol("everyone", req.headers);

        if (failed) throw failed;
        
        next();
    }catch(e){
        res.status(400).json({failed: e});
    }
}