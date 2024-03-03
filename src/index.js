import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import ConnectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path:'./env'
})





ConnectDB();













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
        console.lof(err);
    }
})()

*/