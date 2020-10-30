const productSchema = require('../schema/Product')
const Scan = require('express').Router()

Scan.get("/",async(req,res)=>{
    const data = await productSchema.findOne({hsnno:req.query.code})

    if(data){
        res.status(200).send(data)
    }
    else{
        res.status(404).send(data)
    }
    
    console.log(data)

})

module.exports = Scan