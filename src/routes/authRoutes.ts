import express from "express";
import authControllers from "../controllers/auth";
import { authGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/validateToken",authGuard,authControllers.validateToken);
router.post("/logout",authGuard,authControllers.logout);


export default router;