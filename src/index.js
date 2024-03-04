import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import ConnectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path:'./env'
})





ConnectDB().then(()=>{

//kya pta database to coonect ho gya hain but humari express ki app uss database se baat nhi kr paa rhi toh voh check krne ke liye...
app.on("error",(error)=>{
        console.log("error",error);
              })

app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port no:${process.env.PORT}`);
})
}).catch((err)=>{
    console.log("MongoDB connection failed!!",err);
});














/*
import express from 'express';

const app=express();


;(async ()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      app.on("error",(error)=>{
console.log("error",error);
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is listening at port number ${process.env.PORT}`);
      })


    }catch(err){
        console.log(err);
    }
})()

*/