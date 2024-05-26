
import { Response,Request,NextFunction } from "express"
import { JwtPayload,verify } from "jsonwebtoken";
import User from "../models/User";


declare global {
    namespace Express {
      interface Request {
        user: string;
      }
    }
  }

export const authGuard = async(req:Request,res:Response,next:NextFunction)=>{

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
const token = req.headers.authorization.split(" ")[1];
const {id}=verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;
const user = await User.findById(id);
if(user){
    req.user=id;
next()
}

        }catch(error){
            console.log(`ERROR: ${error}`);
            return res.status(401).json({message:"Authorization required"});
        }
    }
}


export const adminGuard = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById({ _id: req.user });

  if (user && user.role==="admin") {
      next()
  } else {
  return res.status(403).json({message:"Forbiden Access"})
  }
}