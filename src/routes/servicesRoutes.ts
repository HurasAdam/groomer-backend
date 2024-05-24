import express from "express";
import servicesControllers from "../controllers/sesrvices/index"

const router = express.Router();



router.post("/create",servicesControllers.createService);
router.get("/",servicesControllers.getAllServices);





export default router;