import { Request,Response } from "express"
import Service from "../../models/Service";
export const getService = async(req:Request,res:Response)=>{

try{

const {id}=req.params;
const service = await Service.findById(id);
if(!service){
    return res.status(404).json({message:"Service not found"})
}

res.status(200).json(service)

}catch(error){
    console.log(`ERROR:${error}`)
   
}

}