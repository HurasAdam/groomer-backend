import { Request,Response } from "express"
import Reservation from "../../models/Reservaton";

export const getReservations = async(req:Request,res:Response)=>{
try{

const { pending,completed,canceled } = req.query;
let where: any = {};

if(pending){
 where.isPending = true;
}
if(completed){
 where.isCompleted = true;
}
if(canceled){
where.isCanceled = true;
}

const  reservations = await Reservation.find(where).populate([
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