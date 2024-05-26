import { sign } from "jsonwebtoken"
import { Schema, model } from "mongoose";
import * as types from "../types/index";
import { compare,hash } from "bcryptjs";


const UserSchema = new Schema({
email:{type:String,required:true,unique:true,lowercase:true},
username:{type:String,required:true},
password:{type:String,required:true},
role: { type: String, enum: ['client', 'employee', 'admin'], required: true }
})


UserSchema.pre("save",async function(next){
  if(this.isDirectModified("password")){
    this.password = await hash(this.password,10);
    return next();
  }
  return next();
})

UserSchema.methods.generateJWT = async function (): Promise<string> {
    return await sign({ id: this._id }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: "30d",
    });
  };
  

  UserSchema.methods.comparePassword = async function(password:string){
    return await compare(password,this.password);
  }


const User = model<types.IUserDocument>("User",UserSchema);
export default User;