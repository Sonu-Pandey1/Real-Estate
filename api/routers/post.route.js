
import express from "express";
import post from "../controllers/post.controller.js";

const router = express.Router();

router.get("/test1",post);

export default router;