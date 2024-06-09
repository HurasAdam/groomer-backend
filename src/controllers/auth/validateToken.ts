import { Request,Response } from "express"
import User from "../../models/User"

export const validateToken = async(req:Request,res:Response)=>{
const user = await User.findById(req.user).select("-password")
return res.status(200).json(user);
}