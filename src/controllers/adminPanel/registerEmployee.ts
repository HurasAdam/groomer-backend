import { Request,Response } from "express"
import Employee from "../../models/Employee";
import { randomBytes } from "crypto";
import { hash } from "bcryptjs";
import { sendEmailMiddleware } from "../../middleware/sendEmailMiddleware";

export const registerEmployee = async(req:Request,res:Response)=>{
try{
const {username,email,bio,experienceLevel,avatar}=req.body;

let user = await Employee.findOne({email});

if(user){
    return res.status(400).json({message:"Email already taken"})
}


const randomPassword = randomBytes(8).toString('hex');


user = await Employee.create({
    email,username,password:randomPassword,experienceLevel,avatar,image:"",role:"employee"
});
await sendEmailMiddleware({email,content:`HELLO THERE ${randomPassword}`});



return res.status(200).json({
    _id:user._id,
    username:user.username,
    email:user.email,
    role:user.role,
    avatar:"",
    token: await user.generateJWT()
})

}catch(error){
    console.log(`ERROR:${error}`)
}
}