import express from "express";
import servicesControllers from "../controllers/sesrvices/index";
import { authGuard,adminGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/create",authGuard,adminGuard,servicesControllers.createService);
router.get("/",servicesControllers.getAllServices);
router.get("/service/:id",servicesControllers.getService)


export default router;