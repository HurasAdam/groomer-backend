import express from "express";
import reservationControllers from "../controllers/reservations";
import { authGuard } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/create",authGuard,reservationControllers.createReservation);
router.get("/myReservations",authGuard,reservationControllers.getMyReservations);
router.delete("/myReservations/cancel/:id",reservationControllers.cancelReservation);

export default router;