import { Request,Response } from "express"
import User from "../../models/User";
import Employee from "../../models/Employee";

export const getEmployees = async(req:Request,res:Response)=>{
try{

const  employees = await Employee.find().select(["-password"])


res.status(200).json(employees);
}catch(error){
    console.log(`ERROR:${error}`)
}
};