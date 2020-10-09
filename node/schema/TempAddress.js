const mongoose = require('mongoose')

const address = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gstin:{
        type:String,
        required:true
    },
    contact:{
        type:Number
    },
    email:{
        type:String        
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },   
    pincode:{
        type:Number,
        required:true
    }
    
})

module.exports = mongoose.model("tempadress",address)