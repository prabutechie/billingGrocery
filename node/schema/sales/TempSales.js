const mongoose = require('mongoose');

const tempSales = mongoose.Schema({    
    product:{
        type:String,
        required:true
    },
    hsnno:{
        type:Number,
        required:true
    },
    mrp:{
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
    gst:{
        type:Number,
        required:true
    },
    total:{
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

module.exports = mongoose.model("tempsales",tempSales)