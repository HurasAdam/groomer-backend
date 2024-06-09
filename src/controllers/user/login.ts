import { Express,Request,Response } from "express"
import User from "../../models/User";

export const login = async(req:Request,res:Response)=>{

try{

const {email,password}=req.body;

let user = await User.findOne({email});

if(!user){
    return res.status(400).json({message:"Email not found"})
}
if(await user.comparePassword(password)){


const token = await user.generateJWT();
res.cookie("auth_token",token,{
    httpOnly:true,
    secure:false,
    maxAge:86400000
})

    return res.status(200).json({
        _id:user._id,
        email:user.email,
        username:user.username,
    role:user.role,

    })
}else{
    return res.status(400).json({message:"Invalid email or password"})
}

}catch(error){
    console.log(`ERROR: ${error}`)
}

}