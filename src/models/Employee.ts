import { sign } from "jsonwebtoken"
import { Schema, model } from "mongoose";
import * as types from "../types/index";
import { compare,hash } from "bcryptjs";


const EmployeeSchema = new Schema({
email:{type:String,required:true,unique:true,lowercase:true},
username:{type:String,required:true},
password:{type:String,required:true},
avatar:{type:String},
role:{type:String,required:true},
experienceLevel:{type:String,required:true},
mustChangePassword: { type: Boolean, default: true } 

});


EmployeeSchema.pre("save",async function(next){
  if(this.isDirectModified("password")){
    this.password = await hash(this.password,10);
    return next();
  }
  return next();
})

EmployeeSchema.methods.generateJWT = async function (): Promise<string> {
    return await sign({ id: this._id,role:this.role }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: "30d",
    });
  };
  

  EmployeeSchema.methods.comparePassword = async function(password:string){
    return await compare(password,this.password);
  }


const Employee = model<types.IUserDocument>("Employee",EmployeeSchema);
export default Employee;