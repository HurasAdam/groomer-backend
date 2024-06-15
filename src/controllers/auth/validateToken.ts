import { Request,Response } from "express"
import User from "../../models/User"
import Employee from "../../models/Employee";

export const validateToken = async(req:Request,res:Response)=>{


const role = req.role;

let user;

if(role==="admin" || role ==='client'){
    user = await User.findById(req.user).select("-password")
}
else if(role==="employee"){
    user = await Employee.findById(req.user).select("-password") 
    console.log("TUTAJ") 
}

return res.status(200).json(user);
}