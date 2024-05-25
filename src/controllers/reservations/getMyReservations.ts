import { Request,Response } from "express"
import Reservation from "../../models/Reservaton"

export const getMyReservations = async(req:Request,res:Response)=>{
const {id}=req.params;

const myReservations = await Reservation.find({user:id}).populate([{path:"service",select:["name","price","estimatedTime"]}]).select(["-user"])
console.log(myReservations);
res.status(200).json(myReservations);

}

