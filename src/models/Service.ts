import { Schema, model } from "mongoose";

const ServiceSchema = new Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    created:{type:Date,default:Date.now()},
    price:{type:Number,requied:true,},
    estimatedTime:{type:Number,required:true},
    
})


const Service = model("Sergice",ServiceSchema);
export default Service;