import express from "express";
import reservationControllers from "../controllers/reservations";
const router = express.Router();

router.post("/create",reservationControllers.createReservation);

export default router;