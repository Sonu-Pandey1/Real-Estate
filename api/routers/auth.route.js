import express from "express";
import { login, logout, register,google} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.post("/google",google);

export default router;