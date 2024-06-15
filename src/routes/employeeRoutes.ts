import express from "express";
import employeeControllers from "../controllers/employee";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/login",employeeControllers.login);


export default router;