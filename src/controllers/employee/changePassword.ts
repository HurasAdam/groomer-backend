import { Express,Request,Response } from "express"
import Employee from "../../models/Employee";

export const changePassword = async(req:Request,res:Response)=>{

try{

const {password, newPassword}=req.body;



let employee = await Employee.findById({_id:req.user});
let updatedEmployee;

if(!employee){
    return res.status(400).json({message:"User not found"})
}
if(await employee.comparePassword(password)){
   employee.password = newPassword
   const isSaved= await employee.save()

   console.log(isSaved)
if(isSaved){
    employee.mustChangePassword = false;
    const result = await employee.save();
    updatedEmployee= result;
}
res.status(200).json({message:"Hasło zostało zmienione"})
}else{
    return res.status(400).json({message:"Błędne hasło"})
}

}catch(error){
    console.log(`ERROR: ${error}`)
}

}