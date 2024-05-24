import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const PORT=3000;

app.get("/api/test",async(req:express.Request,res:express.Response)=>{
    res.json({message:"TEST endpoint"})
});


app.listen(PORT,()=>{
    console.log(`server listen on port:${PORT}`)
})