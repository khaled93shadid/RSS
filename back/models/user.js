const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    picture:{type:String,default:"https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"},
})

userSchema.pre('save',async function (next){
if(!this.isModified('password')){return next();}
try{
    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
    next();
}
catch(error){next(error)}
})

module.exports= mongoose.model('user',userSchema);
