import { Request, Response } from "express";
import Service, { IService } from "../../models/Service";

export const getServiceDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }



        const responseData = {
         _id:service._id,
         name:service.name,
         description:service.description,
         created:service.created,
         animal:service.animal,
         estimatedTime:service.estimatedTime,
         image:service.image,
         isPromotion:service.isPromotion,
         promotionPrice:service.promotionPrice,
         discountPrice:service.discountPrice,
         reservationCount:service.reservationCount,
        price:service.price
        };

        res.status(200).json(responseData);
    } catch (error) {
        console.log(`ERROR:${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
