import { Schema, model } from "mongoose";

const ReservationSchema = new Schema({
    service:{type:Schema.Types.ObjectId, ref:"Service",required:true},
    owner:{type:Schema.Types.ObjectId, ref:"User",required:true},
    reservationDate:{type:Date, default:Date.now()},
    petName:{type:String, required:true},
    petRace:{type:String,required:true},
    extraInfo:{type:String},
    assignedEmployee:{type:Schema.Types.ObjectId, ref:"User",required:true},
    isCanceled:{type:Boolean,default:false},
    isCompleted:{type:Boolean, default:false},
    isPending:{type:Boolean,default:true},


})


const Reservation = model("Reservation",ReservationSchema);
export default Reservation;