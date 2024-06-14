import { Request,Response } from "express"
import User from "../../models/User";

export const getEmployeeDetails = async(req:Request,res:Response)=>{
try{

    const { id } = req.params;
const  employee = await User.findOne({_id:id}).select(["-password"])


res.status(200).json(employee);
}catch(error){
    console.log(`ERROR:${error}`)
}
};