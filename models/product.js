const mongoose = require('mongoose')
const category = require('./category.js')
const brand = require('./brand.js')

const productSchema = new mongoose.Schema({
    title:{
        require:true,
        type:String 
    },
    price:{
        require:true,
        type:Number
    },
    offerPrice:{
       type:Number 
    },
    description:{
        require:true,
        type:String
    },
    category:{
        require:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    brand:{
        require:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'brand'
    },


})
module.exports=mongoose.model('product',productSchema)