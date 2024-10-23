const mongoose = require("mongoose");
const { v4 } = require("uuid");

const registerSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    username:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        trim:true
    },
    mobilenumber:{
        type:Number,
    },
    password:{
        type:String,
    },

},{timestamps: true}
)

const register = mongoose.model("register", registerSchema)

module.exports = register;