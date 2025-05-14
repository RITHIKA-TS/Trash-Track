const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const sendSMS = require("../twilio/sendSMS");

// POST /api/v1/booking
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save to DB
    const newBooking = new Booking({
      name,
      email,
      phone,
      message,
    });

    await newBooking.save();

    // User SMS
    const userMessage = `Hello ${name},\n\nThank you for booking with us! Your request has been successfully received. Our e-waste collection agent will contact you shortly on ${phone} to schedule the pickup.\n\nFor any queries, feel free to reply to this message.\n\n- E-Waste Recycling Team`;
    await sendSMS(phone, userMessage);

    res.status(201).json({
      success: true,
      message: "Booking created and SMS sent successfully.",
      data: newBooking,
    });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create booking.",
      error: error.message,
    });
  }
});

module.exports = router;
