const mongoose = require('mongoose');

const tempitems = mongoose.Schema({    
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
    },
    gst:{
        type:Number,
        required:true
    },
    gstamount:{
        type:Number,
        required:true
    },
    taxableamount:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("tempitems",tempitems)