import express from "express";
import * as userControllers from "../controllers/userControllers";
const router = express.Router();

router.post("/register",userControllers.register)


export default router;