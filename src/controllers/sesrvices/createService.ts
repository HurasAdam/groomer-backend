import { Request,Response } from "express"
import Service from "../../models/Service";

export const createService = async(req:Request,res:Response)=>{
    try{
const {name,description,price,estimatedTime,image,animal}=req.body;

let service = {
    name,
    description,
    price,
    image,
    animal,
    estimatedTime
}

 await Service.create(service);
return res.status(200).json(service)

    }catch(error){
        console.log(`ERROR:${error}`)
    }
}