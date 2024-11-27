import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: errors.array(),
      })
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

// export const login = (req,res) =>{
//     try {
//         const 
//     } catch (error) {
        
//     }
// }
