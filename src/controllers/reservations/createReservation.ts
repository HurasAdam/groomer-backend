import { Request,Response } from "express"
import Reservation from "../../models/Reservaton";
import Service from "../../models/Service";
import User from "../../models/User";

export const createReservation = async(req:Request,res:Response)=>{
try{
const {serviceId, employee, petName, petRace,reservationDate,extraInfo}=req.body
const selectedService= await Service.findById(serviceId)
const selectedEmployee = await User.findById(employee)

if(!selectedService){
    return res.status(404).json({message:"Service not found"})
}

if(!selectedEmployee){
    return res.status(404).json({message:"Selected employee not found"})
}

const reservaion = new Reservation({service:selectedService._id,user:req.user,petName,petRace,reservationDate,extraInfo});
await reservaion.save();

 selectedService.reservationCount= selectedService.reservationCount +1;
await selectedService.save()
res.status(200).json({message:"Reservation succeed"})
    }catch(error){
        console.log(`ERROR:${error}`);
    }
} 