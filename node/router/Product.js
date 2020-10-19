const mongoose = require('mongoose')
const product = require('express').Router()
const productSchema = require('../schema/Product')

product.post("/", async (req, res) => {  
    console.log(req.body)    
    const insert = await new productSchema(req.body)
    await insert.save((err, doc) => {
        if (err) {
            res.status(404).send(err)
        }
        else {
            res.status(200).send(doc)
        }
    })

})

product.get("/", async (req, res) => {
    const findData = await productSchema.find()
    if (findData) {
        res.status(200).send(findData)
    }
    else {
        res.status(404).send(findData)
    }

})

// product.get("/autofill",async(req,res)=>{
//     const data =await productSchema.findOne({_id:req.query.id})
//     res.json(data)
// })

product.put("/",async(req,res)=>{
    const {_id,qt,gst__v,...data} = req.body

    const find = {
        _id:_id
    }
    const update = {
        $set:data
    }

    // console.log(data)

    const updateResponse = await productSchema.updateOne(find,update)

    if(updateResponse){
        // console.log(updateResponse)
        res.status(200).send(updateResponse)
    }
   
})

product.delete("/",async(req,res)=>{
    const deleteData = await productSchema.deleteOne({_id:req.query.id})
    if(deleteData){
        res.status(200).send(deleteData)
    }
})





// product.get("/searchProduct",async(req,res)=>{    
//     const data =await productSchema.findOne({product:{$regex : req.query.product}})  
//     // console.log(data)  
//     res.send(data)
// })

module.exports = product
