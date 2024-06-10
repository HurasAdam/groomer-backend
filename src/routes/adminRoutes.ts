import express from "express";
import adminControllers from "../controllers/adminPanel";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register-employee",authGuard,adminGuard,adminControllers.registerEmployee);
router.get("/reservations",authGuard, adminGuard, adminControllers.getReservations);
router.get("/employees",authGuard, adminGuard,adminControllers.getEmployees);
router.get("/customers",authGuard, adminGuard,adminControllers.getCustomers);
router.get("/service/:id",authGuard, adminGuard, adminControllers.getServiceDetails);
router.put("/update/service/:id",authGuard,adminGuard,adminControllers.updateServiceDetails);
router.get("/auth/adminValidate",authGuard,adminGuard,adminControllers.validateToken)

export default router;