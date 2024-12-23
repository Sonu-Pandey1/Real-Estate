import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, password, email } = req.body;

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
  console.log(email, password);

  try {
    // check if the user exists or not
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user)
      return res.status(404).json({ message: "Invalid Credentials1!" });

    // check if the password is correct

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(404).json({ message: "Invalid Credentials!" });

    // generat cookie token and send to user
    const age = 1000 * 60 * 60 * 24 * 7;

    const Token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: age,
    });
    console.log(Token, "token hai mere bahi");

    // setting cookie---
    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", Token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
      console.log("login success");
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
