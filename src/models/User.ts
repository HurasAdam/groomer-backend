import { sign } from "jsonwebtoken"
import { Schema, model } from "mongoose";
import * as types from "../types/index";


const UserSchema = new Schema({
email:{type:String,required:true,unique:true,lowercase:true},
username:{type:String,required:true},
password:{type:String,required:true},

})


UserSchema.methods.generateJWT = async function (): Promise<string> {
    return await sign({ id: this._id }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: "30d",
    });
  };
  


const User = model<types.IUserDocument>("User",UserSchema);
export default User;