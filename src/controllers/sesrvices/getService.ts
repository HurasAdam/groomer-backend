import { Request, Response } from "express";
import Service, { IService } from "../../models/Service";

export const getService = async (req: Request, res: Response) => {
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
         image:service.image,
         reservationCount:service.reservationCount,
            price: await service.calculateFinalPrice() 
        };

        res.status(200).json(responseData);
    } catch (error) {
        console.log(`ERROR:${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
