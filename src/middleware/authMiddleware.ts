
import { Response,Request,NextFunction } from "express"
import { JwtPayload,verify } from "jsonwebtoken";
import User from "../models/User";
import Employee from "../models/Employee";


declare global {
    namespace Express {
      interface Request {
        user: string;
        role:string;
      }
    }
  }

export const authGuard = async(req:Request,res:Response,next:NextFunction)=>{


if(!req.cookies["auth_token"]){
  return res.status(401).json({message:"Authorization required"})
}

    if(req.cookies["auth_token"]){
        try{

          const token = req.cookies["auth_token"];

const {id,role}=verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;



let user;
if (role === "client" || role === "admin") {
  user = await User.findById(id);
} else if (role === "employee") {
  user = await Employee.findById(id);
}

        
if(user){
    req.user=id;
    req.role=user.role
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