import express from "express";
import adminControllers from "../controllers/adminPanel";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register-employee",authGuard,adminGuard,adminControllers.registerEmployee);
router.get("/reservations",authGuard, adminGuard, adminControllers.getReservations);

export default router;