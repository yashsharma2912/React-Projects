import { Timestamp } from "mongodb";
import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const userschema = new Schema({ 
    username: {
        type: String,
        require : true,
        unique: true,
    },
    email: {
        type: String,
        require : true,
        unique: true,
    },
    password:{
        type: "String",
        require: true,
    },
    img:{
        type: "String",
        require: false,
    },
    country:{
        type: "String",
        require: true,
    },
    phone:{
        type: "String",
        require: false,
    },
    password:{
        type: "String",
        require: true,
    },
    desc:{
        type: "String",
        require: false,
    },
    isSeller:{
        type: Boolean,
        default: false,
    },
},{
    Timestamp:true
});

export default mongoose.model("user", userschema)