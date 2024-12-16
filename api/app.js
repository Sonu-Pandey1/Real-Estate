import express from "express";
import cookieParser from "cookie-parser"
import postRoute from "./routers/post.route.js";
import authRoute from "./routers/auth.route.js";
// import testRoute from "./routers/test.route.js";
import testRoute from "./routers/test.route.js"
import cors from "cors"
// const express = require("express")

const app = express();
let PORT = 3000;

app.get("/",(req,res)=>{
    console.log("home")
    res.send("welcome to home ")
    console.log(process.env.CLIENT_URL)
})

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
  }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.use("/api/test",testRoute)

app.listen(PORT,(req,res)=>{
    console.log(`app is running on port ${PORT}`)
});