const mongoose = require('mongoose')

const purches = mongoose.Schema({
    address:{
        type:Object,
        required:true
    },
    payment:{
        type:String,
        required:true
    },
    invoicedate:{
        type:String,
        required:true
    },
    invoiceno:{
        type:String,
        required:true

    },
    items:{
        type:Array,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
    
})

module.exports = mongoose.model("purches",purches)