
import express from "express";
import {verifyToken} from "../middleware/verifyToken.js"
import { addPost, DeletePost, Post,  UpdatePost,getListings } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/",getListings);
// router.get("/",Posts);
router.get("/:id",Post);
router.post("/",verifyToken, addPost);
router.put("/:id",verifyToken, UpdatePost);
router.delete("/:id",verifyToken, DeletePost);

export default router;