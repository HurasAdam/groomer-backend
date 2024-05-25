import express from "express";
import reservationControllers from "../controllers/reservations";
const router = express.Router();

router.post("/create",reservationControllers.createReservation);
router.get("/myReservations/:id",reservationControllers.getMyReservations);

export default router;