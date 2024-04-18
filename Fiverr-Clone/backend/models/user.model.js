import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const { schema } = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: false,
    },
    country:{
        type: String,
        required: false,
    },
    phone:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    isSeller: {
        type:Boolean,
        default:false,
    },
},{
    Timestamps:true,
});

export default mongoose.model("user", userSchema)