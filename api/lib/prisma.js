// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma;

import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to MongoDB via Prisma!");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
  }
}

connectDB();

export default prisma;
