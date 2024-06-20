import { Request,Response } from "express"
import Employee from "../../models/Employee";

export const getEmployeeDetails = async(req:Request,res:Response)=>{
try{

    const { id } = req.params;
const  employee = await Employee.findById(id).select("-password")


res.status(200).json(employee);
}catch(error){
    console.log(`ERROR:${error}`)
}
};