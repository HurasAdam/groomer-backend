import { Schema, model } from "mongoose";

const ServiceSchema = new Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    created:{type:Date,default:Date.now()},
    price:{type:Number,requied:true,},
    estimatedTime:{type:Number,required:true},
    animal:{type:String,required:true},
    image:{type:String},
    reservationCount:{type:Number,default:0}
    
})


const Service = model("Service",ServiceSchema);
export default Service;