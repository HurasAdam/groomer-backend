import Service from "../../models/Service"
import { Request,Response } from "express";

export const  getAllServices= async(req:Request,res:Response) =>{

    try{
const allServices = await Service.find();
if(!allServices){
    return res.status(200).json([]);
}
return res.status(200).json(allServices);
    }catch(error){
        console.log(`ERROR:${error}`)
    }
}