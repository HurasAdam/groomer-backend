import express from "express";
import userControllers from "../controllers/user/index";
const router = express.Router();

router.get("/employees",userControllers.getAllEmployees);
router.post("/register",userControllers.register);
router.post("/login",userControllers.login);


export default router;