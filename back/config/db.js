const mongoose = require ('mongoose');
require ('dotenv').config();

const connectdb = async()=>{

try{
    await mongoose.connect(process.env.URL)
    console.log('mongo db is connected (config function)')

}
catch(error){console.log(error)}

}

module.exports= connectdb;