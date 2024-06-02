import { Request,Response } from "express"
import Reservation from "../../models/Reservaton";

export const getReservations = async(req:Request,res:Response)=>{
try{


const  reservations = await Reservation.find({});

res.status(200).json(reservations);



}catch(error){
    console.log(`ERROR:${error}`)
}
}