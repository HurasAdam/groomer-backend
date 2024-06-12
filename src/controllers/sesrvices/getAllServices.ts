import Service from "../../models/Service"
import { Request,Response } from "express";

export const  getAllServices= async(req:Request,res:Response) =>{

    try{
        const {filter,animal} = req.query;
console.log(req.query)

let query = Service.find();

if (animal) {
    query = query.where({ animal });
}

if (filter === "popular") {
    query = query.sort({ reservationCount: -1 }).limit(6);
}

const allServices = await query.exec();


if(!allServices){
    return res.status(200).json([]);
}

const finalResponsee = allServices.map((service) => ({
    _id:service._id,
    name:service.name,
    description:service.description,
    created:service.created,
    animal:service.animal,
    estimatedTime:service.estimatedTime,
    image:service.image,
    reservationCount:service.reservationCount,
    isPromotion:service.isPromotion,
    price: service.isPromotion ? service.promotionPrice : service.price
}));


return res.status(200).json(finalResponsee);
    }catch(error){
        console.log(`ERROR:${error}`)
    }
}