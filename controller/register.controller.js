const register = require("../models/register.model");

const userRegister = async (req,res) =>{
    try {
        let {email, username} = req.body;
        
    } catch (error) {
        res.json({
            Error : error
        })
    }
};

module.exports ={
    userRegister
}