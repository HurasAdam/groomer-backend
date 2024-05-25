import { Request,Response } from "express"
import Reservation from "../../models/Reservaton"

export const getMyReservations = async(req:Request,res:Response)=>{
const {id}=req.params;

const myReservations = await Reservation.find({user:id}).populate([{path:"service",select:["name","price","estimatedTime","image","description"]}]).select(["-user"])

res.status(200).json(myReservations);

}

