const userRouter = require ('./routers/userRouter');
const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/api',userRouter);

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`server is running on port${port}`))