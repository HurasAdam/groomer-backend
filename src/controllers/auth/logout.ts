import {Request,Response} from "express";


export const logout = async(req:Request,res:Response)=>{
    res.cookie("auth_token","",{
        expires:new Date(0)
    })

    res.status(200).json({message:"Logged out successfully"})
}

