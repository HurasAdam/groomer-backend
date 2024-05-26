import express from "express";
import adminControllers from "../controllers/adminPanel";

const router = express.Router();

router.post("/register-employee",adminControllers.registerEmployee);

export default router;