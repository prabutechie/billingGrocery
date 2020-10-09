const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json())

const product = require('./router/Product')
const purches = require('./router/Purches')
const sales = require('./router/Sales')
const profit = require('./router/Profit')
const address = require('./router/Address')

app.use("/product",product)
app.use("/purches",purches)
app.use("/sales",sales)
app.use("/profit",profit)
app.use("/address",address)


app.get("/",(req,res)=>{
    res.json("Root")
})

mongoose.connect("mongodb://localhost:27017/billgrocery",{ useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if(!err){
        console.log("Mongodb Connectced")
    }
    if(err){
        console.log(err)
    }
})

app.listen(2000,()=>{
    console.log("Server run port 2000")
})

