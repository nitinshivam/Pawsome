const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc Register a user
//@router POST /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvaliable = await User.findOne({ email });
  if (userAvaliable) {
    res.status(400);
    throw new Error("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});
//@desc Login a user
//@router POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({
      jwt: accessToken,
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

//@desc Register a user
//@router POST /api/user/bookAppointment
//@access public
const bookAppointment = asyncHandler(async (req, res) => {
  const { email, pet, appointmentType, date, time, message } = req.body;
  if (!email || !pet || !appointmentType || !date || !time || !message) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  // Find the user by email
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  // Add appointment to user's appointments array
  await user.appointments.push({ date, time, petname: pet, service: appointmentType, message });

  try {
    // Save the user with the new appointment
    const updatedUser = await user.save();
    res.status(201).json({ message: "Appointment Booked Successfully"});
  } catch (error) {
    res.status(500).json({ message: "Error adding appointment", error: error.message });
  }
});

//@desc Register a user
//@router POST /api/user/getAppointments
//@access public
const getAppointments = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  // Find the user by email
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  try {
    // Save the user with the new appointment
    res.status(201).json({ appointments: user.appointments});
  } catch (error) {
    res.status(500).json({ message: "Error adding appointment", error: error.message });
  }
});



//@desc Current user info
//@router GET /api/user/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user" });
});

module.exports = { registerUser, loginUser, currentUser, bookAppointment, getAppointments };
