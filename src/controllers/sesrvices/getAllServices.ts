import Service from "../../models/Service"
import { Request,Response } from "express";

export const  getAllServices= async(req:Request,res:Response) =>{

    try{
const allServices = await Service.find();
if(!allServices){
    return res.status(200).json([]);
}


// const finalResponse = await Promise.all(allServices.map(async (service) => {
//     const calculatedPrice = await service.calculateFinalPrice();
//     return {
//         ...service.toJSON(),
//         price: calculatedPrice
//     };
// }));


const finalResponsee = allServices.map((service) => ({
    _id:service._id,
    name:service.name,
    description:service.description,
    created:service.created,
    anima:service.animal,
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