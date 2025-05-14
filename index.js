// index.js or app.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const bookingRoutes = require("./routes/booking");
const { sendSMS } = require("./twilio/sendSMS"); // Reusable Twilio function

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use cors middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
  })
);

// MongoDB connection
const connectToMongoDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not set.");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};
connectToMongoDB();

// Routes
app.use("/api/v1/booking", bookingRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
