import { Request,Response } from "express";
import User from "../../models/User";


export const register = async(req:Request,res:Response)=>{

    try{
        const {email,username,password}=req.body;
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({message:"User already exist"})
        }
        user = await User.create({
            username,email,password,role:"client"
        });
return res.status(200).json({
    _id:user._id,
    username:user.username,
    email:user.email,
    role:user.role,
    token: await user.generateJWT()
})


    }catch(error){
        console.log(error)
    }


}

