import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

try {
    await mongoose.connect('mongodb+srv://syash:yash@123@cluster0.5jcresn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  } catch (error) {
    console.log(error);
  }

app.listen(8800,() => {
 console.log(
    "backend connected"
 )
})