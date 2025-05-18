const Product = require('../models/product.js');


exports.getAllproducts= async(req,res)=>{
try{
    console.log('you are in getallproduct backend fn')
const product1 = await Product.find();
res.status(200).json(product1);
}
catch(error){res.status(500).json({message:error.message})}
}


exports.createProduct = async(req,res)=>{
    console.log('you are in create product')
const{name,num,dis,pic}=req.body;
try{
product1={name,num,dis,pic};
savedproduct = new Product(product1);
savedproduct.save();
res.status(200).json('new product added successfully')
}
catch(error){res.status(500).json({message:error.message})}

}


exports.updateproduct = async(req,res)=>{
    console.log('you are in updateProduct function')
const {id} = req.params
const {name,num,dis,pic}=req.body

try{
const product1 = await Product.findByIdAndUpdate(id,{name,num,dis,pic})
res.status(200).json({message:'product updated successfully'})

}

catch(error){res.status(500).json({message:error.message})}
}


exports.deleteProduct = async(req,res)=>{
    const {id} = req.params
    
    try{
    const product1 = await Product.findByIdAndDelete(id)
    res.status(200).json({message:'product delete successfully'})
    
    }
     catch(error){res.status(500).json({message:error.message})}
    }


    exports.getproductbyname = async(req,res)=>{
    const {name}=req.body;
    try{
        const product1 = await Product.find({name:name})
       return(res.status(200).json(product1))
    }
    
    catch(error){res.status(500).json({message:error.message})};
    
    }
    