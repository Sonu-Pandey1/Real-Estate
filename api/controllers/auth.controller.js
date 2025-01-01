import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  console.log(req.body)
  const { username, password, email,avatar } = req.body;

  try {
    // Check if a user with the given email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      console.log("email already exists");
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        avatar: avatar || "https://cdn-icons-gif.flaticon.com/8797/8797862.gif",
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "user Created successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "FAiled to create user." });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);

  try {
    // check if the user exists or not
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user)
      return res.status(401).json({ error: "Invalid Credentialss!" });

    // check if the password is correct

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: "Invalid Credentials!" });

    // generat cookie token and send to user
    const age = 1000 * 60 * 60 * 24 * 7;

    const Token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: age,
    });

    // setting cookie---
    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", Token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        // secure: true,
        // sameSite: "none", // "strict" to non i do then working .
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: age,
      })
      .status(200)
      .json(userInfo );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

export const logout = (req, res) => {
  console.log("logout");

  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logout Successfully" });
};


export const google = async (req, res) => {
  try {
    const { email, name, photo } = req.body;

    if (!email || !name) {
      console.error("Missing required fields:", { email, name });
      return res.status(400).json({ error: "Email and name are required." });
    }

    let user = await prisma.user.findUnique({ where: { email } });

    const token = jwt.sign({ id: user ? user.id : null }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    if (user) {
      const { password, ...userInfo } = user;
      return res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
          maxAge: 1000 * 60 * 60 * 24 * 7,
        })
        .status(200)
      .json({
        user:userInfo,
        message:"Login successfully!"
      });
    }
    console.log(userInfo)

    const generatedPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(generatedPassword, 10);

    const username = `${name.split(" ").join("").toLowerCase()}${Math.random().toString(36).slice(-4)}`;

    user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        avatar: photo || "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png", 
      },
    });
 
    const { password, ...userInfo } = user;
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .status(200)
      .json({
        user:userInfo,
        message:"SignUp&Login successfully!"
      });
      console.log(userInfo)
  } catch (error) {
    console.error("Error during Google authentication", error);
    res.status(500).json({ error: "Something went wrong." });
  }
};


