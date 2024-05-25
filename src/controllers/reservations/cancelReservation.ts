import { Request,Response } from "express"
import Reservation from "../../models/Reservaton";


export const cancelReservation = async(req:Request,res:Response)=>{

    try{
        const {id}=req.params;

const reservation= await Reservation.findById(id)

console.log(reservation);

if(!reservation){
    return res.status(404).json({message:"Reservation not found"})
}

const isReservationDeleted=await Reservation.findOneAndDelete({_id:id});

if(isReservationDeleted){
    return res.status(200).json({message:"Reservation canceled"})
}

    }catch(error){
        console.log(`ERROR:${error}`);
    }

} 