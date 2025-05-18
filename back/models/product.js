const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

     name:{type:String,required:true},
     num:{type:String,required:true},
     dis:{type:String,required:true},
     pic:{type:String,required:true},
})

module.exports= mongoose.model('product',productSchema);
