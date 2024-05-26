import { Request,Response } from "express"
import User from "../../models/User";

export const registerEmployee = async(req:Request,res:Response)=>{
try{
const {username,email,password}=req.body;

let user = await User.findOne({email});

if(user){
    return res.status(400).json({message:"Email already taken"})
}
user = await User.create({
    username,email,password,role:"employee"
});
return res.status(200).json({
    _id:user._id,
    username:user.username,
    email:user.email,
    role:user.role,
    token: await user.generateJWT()
})

}catch(error){
    console.log(`ERROR:${error}`)
}
}