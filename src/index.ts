import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDb from "./config/connectToDb";


// ROUTES
import userRoutes from "./routes/userRoutes";
import servicesRoutes from "./routes/servicesRoutes";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.FRONTEND_URL
}));

const PORT=3000;



app.use("/api/users",userRoutes)
app.use("/api/services",servicesRoutes)




connectToDb().then(()=>{
    app.listen(PORT,()=>console.log("Server is running on port",PORT))
})