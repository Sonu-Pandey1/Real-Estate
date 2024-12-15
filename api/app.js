import express from "express";
import cookieParser from "cookie-parser"
import postRoute from "./routers/post.route.js";
import authRoute from "./routers/auth.route.js";
// const express = require("express")

const app = express();
let PORT = 3000;
 
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.listen(PORT,(req,res)=>{
    console.log(`app is running on port ${PORT}`)
});