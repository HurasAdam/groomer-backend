import { Request,Response } from "express"
import Reservation from "../../models/Reservaton";

export const getReservations = async(req:Request,res:Response)=>{
try{

const  reservations = await Reservation.find({}).populate([
    {
        path:"service",
        select:["name","price","estimatedTime","image","description"]
    },
    {path:"assignedEmployee",
    select:["username","avatar"]},
    {path:"owner",
        select:["username"]
    }
]);

res.status(200).json(reservations);
}catch(error){
    console.log(`ERROR:${error}`)
}
};