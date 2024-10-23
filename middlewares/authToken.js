const jwt = require("jsonwebtoken");
const register = require("../models/register.model");

const generateToken = (userId) =>{
    let token = jwt.sign({id: userId}, process.env.JWT_KEY)
}