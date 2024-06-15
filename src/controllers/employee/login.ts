import { Express,Request,Response } from "express"
import Employee from "../../models/Employee";

export const login = async(req:Request,res:Response)=>{

try{

const {email,password}=req.body;

let employee = await Employee.findOne({email});

if(!employee){
    return res.status(400).json({message:"Email not found"})
}
if(await employee.comparePassword(password)){


const token = await employee.generateJWT();
res.cookie("auth_token",token,{
    httpOnly:true,
    secure:false,
    maxAge:86400000
})

  



    return res.status(200).json({
        _id:employee._id,
        email:employee.email,
        username:employee.username,
    role:employee.role,

    })

}else{
    return res.status(400).json({message:"Invalid email or password"})
}

}catch(error){
    console.log(`ERROR: ${error}`)
}

}