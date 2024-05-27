import { Schema, model } from "mongoose";

const ReservationSchema = new Schema({
    service:{type:Schema.Types.ObjectId, ref:"Service",required:true},
    user:{type:Schema.Types.ObjectId, ref:"User",required:true},
    reservationDate:{type:Date, default:Date.now()},
    petName:{type:String, required:true},
    petRace:{type:String,required:true},
    extraInfo:{type:String}

})


const Reservation = model("Reservation",ReservationSchema);
export default Reservation;