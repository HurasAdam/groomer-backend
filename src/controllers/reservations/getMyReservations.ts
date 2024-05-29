import { Request,Response } from "express"
import Reservation from "../../models/Reservaton"

export const getMyReservations = async(req:Request,res:Response)=>{

const myReservations = await Reservation.find({owner:req.user}).populate([
    {
        path:"service",
        select:["name","price","estimatedTime","image","description"]
    },
    {path:"assignedEmployee",
    select:["username","avatar"],
},]).select("-owner")
console.log("myReservations")
console.log(myReservations)
res.status(200).json(myReservations);

}

