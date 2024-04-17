import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set('strictQuery',true)


try {
    await mongoose.connect(process.env.Mongo);
    console.log("db Connected")
  } catch (err) {
     console.log(err);
  }



app.listen(8800,()=>{
    console.log("msg from backend");
})