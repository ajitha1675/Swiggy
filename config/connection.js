const mongoose = require("mongoose");

const connection = () =>{
    try {
        mongoose.connect(process.env.MANGO_URL)
        console.log("Database are connected")
    } catch (error) {
        console.log("connection error:", error.message);
    }
};

module.exports =  connection;