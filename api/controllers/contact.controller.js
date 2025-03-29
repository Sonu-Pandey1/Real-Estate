import prisma from "../lib/prisma.js";
import nodemailer from "nodemailer";
export const sendEmail = async (req, res) => {
    
    const { name, email, phone, message, inquiryType } = req.body;

    if (!email || !message) {
        return res.status(400).json({ success: false, error: "Email and message are required" });
    }

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ["admin@example.com", "propertyowner@example.com"], // Replace with real emails
        subject: `New Inquiry: ${inquiryType}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
}


