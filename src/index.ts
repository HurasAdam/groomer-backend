import express from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/userRoutes";
import connectToDb from "./config/connectToDb";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const PORT=3000;

app.get("/api/test",async(req:express.Request,res:express.Response)=>{
    res.json({message:"TEST endpoint"})
});

app.use("/api/users",userRoutes)




connectToDb().then(()=>{
    app.listen(PORT,()=>console.log("Server is running on port",PORT))
})