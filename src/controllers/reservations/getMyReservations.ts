import { Request,Response } from "express"
import Reservation from "../../models/Reservaton"

export const getMyReservations = async(req:Request,res:Response)=>{

const myReservations = await Reservation.find({user:req.user}).populate([{path:"service",select:["name","price","estimatedTime","image","description"]},{path:"user",select:["username","avatar"]}])

res.status(200).json(myReservations);

}

