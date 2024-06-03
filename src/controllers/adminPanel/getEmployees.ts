import { Request,Response } from "express"
import User from "../../models/User";

export const getEmployees = async(req:Request,res:Response)=>{
try{

const  employees = await User.find({role:"employee"}).select(["-password"])


res.status(200).json(employees);
}catch(error){
    console.log(`ERROR:${error}`)
}
};