import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
  name,
  email,
  password: hashedPassword,
});

res.status(201).json({
  message: "User registered successfully",
  user: {
    id: user._id,
    name: user.name,
    email: user.email
  }
});

});

const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  console.log(email);
  console.log(password);


  const user = await User.findOne({ email });

  console.log("User:", user);


  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }


  const isMatch = await bcrypt.compare(password, user.password);

  console.log("Password Match:", isMatch);


  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }


  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );


  console.log("Token Generated");


  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });

  const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);

console.log(decoded);
req.user = decoded;
next();

});

export {
  registerUser, loginUser
};