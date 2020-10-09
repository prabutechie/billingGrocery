const mongoose = require('mongoose')

const product = mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    hsnno:{
        type:Number,
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
    qt:{
        type:Number,
        required:true
    },
    type:{
      type:String,
      required:true  
    }
    
})

module.exports = mongoose.model("products",product)
