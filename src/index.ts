import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import connectToDb from "./config/connectToDb";

// ROUTES
import userRoutes from "./routes/userRoutes";
import servicesRoutes from "./routes/servicesRoutes";
import reservationRoutes from "./routes/reservationRoutes";
import adminRoutes from "./routes/adminRoutes";
import authRoutes from "./routes/authRoutes";



const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
}));

const PORT=3000;


app.use("/api/users",userRoutes);
app.use("/api/services",servicesRoutes);
app.use("/api/reservations",reservationRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/auth",authRoutes);



connectToDb().then(()=>{
    app.listen(PORT,()=>console.log("Server is running on port",PORT))
});