import { Request,Response } from "express"
import Service from "../../models/Service";

export const createService = async(req:Request,res:Response)=>{
    try{
const {name,description,price,estimatedTime,image,animal,isPromotion,promotionPrice,discountPrice}=req.body;

let service = {
    name,
    description,
    price,
    image,
    animal,
    estimatedTime,
    promotionPrice,
    discountPrice,
    isPromotion
}

 await Service.create(service);
return res.status(200).json({message:"Usługa została dodana"})

    }catch(error){
        console.log(`ERROR:${error}`)
    }
}