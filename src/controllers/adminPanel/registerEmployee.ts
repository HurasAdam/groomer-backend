import { Request,Response } from "express"
import Employee from "../../models/Employee";
import { randomBytes } from "crypto";
import { sendEmailMiddleware } from "../../middleware/sendEmailMiddleware";
import { uploadAvatar } from "../../utilts/uploadAvatar";


export const registerEmployee = async(req:Request,res:Response)=>{
try{
const {username,email,bio,experienceLevel}=req.body;
const avatarFile = req.file as Express.Multer.File;
let user = await Employee.findOne({email});
let avatar;

if(user){
    return res.status(400).json({message:"Email already taken"})
}

if(avatarFile){
 avatar= await uploadAvatar(avatarFile)
}


const randomPassword = randomBytes(8).toString('hex');

user = await Employee.create({
    email,username,password:randomPassword,experienceLevel,avatar,bio,image:"",role:"employee"
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