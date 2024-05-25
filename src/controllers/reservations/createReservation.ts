import { Request,Response } from "express"
import Reservation from "../../models/Reservaton";
import Service from "../../models/Service";
import User from "../../models/User";

export const createReservation = async(req:Request,res:Response)=>{

    try{
        const {serviceId,userId}=req.body

const selectedService= await Service.findById(serviceId)

// console.log(selectedService)



const userr = await User.findById(userId);


if(!selectedService){
    return res.status(404).json({message:"Service not found"})
}

const reservaion = new Reservation({service:selectedService._id,user:userr});
await reservaion.save();
res.status(200).json({message:"Reservation succeed"})
    }catch(error){
        console.log(`ERROR:${error}`);
    }

} 