import { Request, Response } from "express";
import Service, { IService } from "../../models/Service";

export const updateServiceDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

const {name,description,animal,estimatedTime,price,image,promotionPrice,isPromotion,discountPrice} = req.body;



    
service.name = name? name :service.name,
service.description = description? description : service.description,
service.created = service.created,
service.animal = animal ? animal :service.animal,
service.estimatedTime = estimatedTime ? estimatedTime : service.estimatedTime,
service.image = image ? image : service.image,
service.isPromotion = isPromotion ? isPromotion : service.isPromotion,
service.promotionPrice = promotionPrice ? promotionPrice : service.promotionPrice,
service.discountPrice = discountPrice ? discountPrice : service.discountPrice,
service.reservationCount = service.reservationCount,
service.price = price ? price :service.price
     


       const xd= await service.save();

        res.status(200).json({message:"Usługa zostala zaktualizowana "});
    } catch (error) {
        console.log(`ERROR:${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
