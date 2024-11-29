import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !email || !password) {
      return res.status(200).json({
        success: false,
        message: "All Fields Are Required",
      });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Registered with this Email",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
      user: {
        ...newUser.toObject(),
        password: undefined,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({
      success: false,
      errors: errors.array(),
    });
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const payload = {
        _id: user._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 60 * 60 * 1000,
        })
        .status(200)
        .json({
          success: true,
          message: "Logged In Successfully",
          token,
        });
    } else {
      return res.status(400).json({
        success: false,
        message: "Password Does Not Match",
      });
    }
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({
      success: false,
      message: "Something Went Wrong While Logging In",
    });
  }
};

export const getUserProfile = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
};
