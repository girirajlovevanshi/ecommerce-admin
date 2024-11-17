// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js'
dotenv.config({path:'./config/.env'})

// DB connection
connectDB();

const app = express();

//middleware
app.use(express.json());

//Routes
app.get("/", (req,res)=>{
    res.send('Admin panal is running');
});

//start server
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
    
});
