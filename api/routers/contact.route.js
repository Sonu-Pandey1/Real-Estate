
import express from "express";
import { verifyToken } from "../middleware/verifyToken.js"
import { sendEmail } from "../controllers/contact.controller.js";

const router = express.Router();
router.post("/send-email", sendEmail);


export default router;
