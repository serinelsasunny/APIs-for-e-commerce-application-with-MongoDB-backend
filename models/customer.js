const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    place:{
        type:String
    }
   
})
module.exports = mongoose.model('customer',customerSchema)