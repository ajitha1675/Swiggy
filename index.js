const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());

app.use("/",(req,res)=>{
    res.send("Server is Alive")
});

const port = 3000;

app.listen(port, ()=>{
    console.log("Server is running on:", port);
    
});