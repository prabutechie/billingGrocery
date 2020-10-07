const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json())

app.get("/",(req,res)=>{
    res.json("Root")
})

mongoose.connect("mongodb://localhost:27017/",{ useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if(!err){
        console.log("Mongodb Connectced")
    }
    if(err){
        console.log(err)
    }
})

app.listen(4000,()=>{
    console.log("Server run port 4000")
})

