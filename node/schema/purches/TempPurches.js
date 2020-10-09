const mongoose = require('mongoose')

const TempPurches = mongoose.Schema({
    address:{
        type:Object
    },
    payment:{
        type:String
    },
    items:{
        type:Array
    },
    total:{
        type:Number
    },
    gstTotal:{
        type:Number
    },
    grandTotal:{
        type:Number        
    }
    
})

module.exports = mongoose.model("temppurches",TempPurches)