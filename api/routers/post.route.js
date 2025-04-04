
import express from "express";
import { verifyToken } from "../middleware/verifyToken.js"
import { getListings, listings, addlisting, Updatelisting, Deletelisting } from "../controllers/post.controller.js";

const router = express.Router();
router.get("/", getListings);
router.get("/:id", listings);
router.post("/", verifyToken, addlisting);
router.put("/:id", verifyToken, Updatelisting);
router.delete("/:id", verifyToken, Deletelisting);

export default router;