import express from "express";
import adminControllers from "../controllers/adminPanel";
import { adminGuard, authGuard } from "../middleware/authMiddleware";
import { uploadFile } from "../middleware/uploadImageMiddleware";


const router = express.Router();

router.post("/register-employee",authGuard,adminGuard,uploadFile.single("avatar"),adminControllers.registerEmployee);
router.get("/reservations",authGuard, adminGuard, adminControllers.getReservations);
router.get("/employees",authGuard, adminGuard,adminControllers.getEmployees);
router.get("/customers",authGuard, adminGuard,adminControllers.getCustomers);
router.get("/service/:id",authGuard, adminGuard, adminControllers.getServiceDetails);
router.put("/update/service/:id",authGuard,adminGuard,adminControllers.updateServiceDetails);
router.get("/auth/adminValidate",authGuard,adminGuard,adminControllers.validateToken);
router.get("/employee/:id",authGuard,adminGuard,adminControllers.getEmployeeDetails);

export default router;