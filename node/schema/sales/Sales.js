const mongoose = require('mongoose');


const sales = mongoose.Schema({    
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
    Total:{
        type:Number,
        required:true
    },
    gstTotal:{
        type:Number,
        required:true
    },
    grandTotal:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("sales",sales)