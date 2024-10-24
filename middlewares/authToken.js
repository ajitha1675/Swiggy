const jwt = require("jsonwebtoken");
const register = require("../models/register.model");

const generateToken = (userId) =>{
    let token = jwt.sign({id: userId}, process.env.JWT_KEY, {expiresIn: '10d'});
    return token;
};

const veriftyToken = async (req,res, next) =>{
    const token = req.headers.authorization;
    if(!token) {
        return res.status(404).json({message:"User must loggedin"})
    }
    let withoutToken = token.split(' ')[1]
    try {
        let payload = jwt.verify(withoutToken, process.env.JWT_KEY);

        let checkuser = await register.findOne({userId: payload.id})
        if(!checkuser){
            return res.status(404).json({message: "User not found"})
        };

        req.userId = checkuser.userId;
    } catch (error) {
        
    }
}