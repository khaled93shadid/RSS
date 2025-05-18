const User = require('../models/user')
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();
const secretkey=process.env.SECRETKEY;
var emaill="";


exports.getAllUsers= async(req,res)=>{
try{
const users = await User.find();
res.status(200).json(users);
}
catch(error){res.status(500).json({message:error.message})}
}


exports.createUser = async(req,res)=>{
    console.log('you are in create user')
const{first_name,last_name,email,password}=req.body;
try{
user1={first_name,last_name,email,password};
savedUser = new User(user1);
savedUser.save();
res.status(200).json('signup complete successfully')
}
catch(error){res.status(500).json({message:error.message})}

}

exports.deleteuser = async(req,res)=>{
    const {id} = req.params
    
    try{
    const user1 = await User.findByIdAndDelete(id)
    res.status(200).json({message:'user delete successfully'})
    
    }
    
    catch(error){res.status(500).json({message:error.message})}
    }

    
    exports.login = async(req,res)=>{
        console.log('you are in login')
        const{email,password}=req.body;
        try{
            const user1 = await User.findOne({email:email})
            if(!user1){return res.status(400).json({message:'user not found'})}
            
            const ismatch = await bcrypt.compare(password,user1.password);

            if(!ismatch){return res.status(400).json({message:'invalid passward'})}

            const token = jwt.sign({userid:user1._id},secretkey,{expiresIn:'24h'})
            

            res.status(200).json({message:'user login successfuly',token:token},emaill=user1.email,console.log(email))
        }
catch(error){res.status(500).json({message:error.message})}
 }


 exports.auth = async (req,res,next) => {
    const token = req.header('auth');
    if(!token){return res.status(400).json({message:'token not found'})}
    try{
        const userverified = jwt.verify(token,secretkey)
        req.User= userverified
        return res.status(200).json({message:'user is authenticated'})
        next()
    }
    catch(error){res.status(500).json({message:error.message})}
 }


 exports.getuserbyemail = async(req,res)=>{

try{
    const user1 = await User.find({email:emaill})
   return(res.status(200).json(user1))
}

catch(error){res.status(500).json({message:error.message})};

}


exports.updateuser = async(req,res)=>{
    console.log('you are in updateuser function')
const {id} = req.params
const {first_name,last_name,email,password,picture}=req.body

try{
const user1 = await User.findByIdAndUpdate(id,{first_name,last_name,email,password,picture})
res.status(200).json({message:'user updated successfully'})

}

catch(error){res.status(500).json({message:error.message})}
}
