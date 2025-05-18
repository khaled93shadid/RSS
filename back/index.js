const userRouter = require ('./routers/userRouter');
const productRouter = require ('./routers/productRouter');
const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config()
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',userRouter);
app.use('/api',productRouter);

const PORT1 = process.env.PORT || 5000;
app.listen(5050,()=>console.log(`server is running on port ${PORT1}`))