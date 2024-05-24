
import { Response,Request,NextFunction } from "express"
import { JwtPayload,verify } from "jsonwebtoken";

export const authGuard = (req:Request,res:Response,next:NextFunction)=>{

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
const token = req.headers.authorization.split(" ")[1];
const {id}=verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        }catch(error){
            console.log(`ERROR: ${error}`);
            return res.status(401).json({message:"Authorization required"});
        }
    }
}