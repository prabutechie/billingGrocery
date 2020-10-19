const address = require('express').Router()
const addressSchema = require('../schema/Adress')

address.post("/", async (req, res) => {
    // console.log("address", req.body)
    const data = await new addressSchema(req.body)
    await data.save((err, doc) => {
        if (err) {
            // console.log(err)
            res.status(404).send(err)
        }
        if (doc) {
            // console.log(doc)
            res.status(200).send(doc)
        }
    })

})
address.get("/", async (req, res) => {
    const data = await addressSchema.find()
    if (data) {
        res.status(200).send(data)
    }
    else {
        res.status(404).send()
    }
})

address.put("/", async (req, res) => {
    // console.log("address", req.body)
    const { _id, __v, ...data } = req.body

    const find = {
        _id: _id
    }
    const update = {
        $set: data
    }

    const updateData = await addressSchema.updateOne(find, update)

    if (updateData) {
        // console.log(updateData)
        res.status(200).send(updateData)
    }

})

address.delete("/", async (req, res) => {
    const deleteItem = await addressSchema.deleteOne({ _id: req.query.id })
    res.status(200).send(deleteItem)
})

// address.post("/tempaddress",async(req,res)=>{
   
// })

// address.get("/tempaddress",async(req,res)=>{

// })

// address.put("/tempaddress",async(req,res)=>{

// })

// address.delete("/tempaddress",async(req,res)=>{

// })

module.exports = address