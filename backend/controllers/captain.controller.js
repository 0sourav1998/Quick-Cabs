import Captain from "../models/captain.model.js";
import bcrypt from "bcryptjs"
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken"


export const registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
  
    try {
      const { firstName, lastName, email, password, color ,plate,capacity,vehicleType } = req.body;
      if (!firstName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        return res.status(200).json({
          success: false,
          message: "All Fields Are Required",
        });
      }
  
      const existingCaptain = await Captain.findOne({ email: email });
      if (existingCaptain) {
        return res.status(400).json({
          success: false,
          message: "Captain Already Registered with this Email",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newCaptain = await Captain.create({
        fullName: {
          firstName,
          lastName,
        },
        email,
        password: hashedPassword,
        vehicle : {
            color : color ,
            capacity : capacity ,
            plate : plate ,
            vehicleType : vehicleType
        }
      });
      return res.status(200).json({
        success: true,
        message: "Captain Created Successfully",
        captain: {
          ...newCaptain.toObject(),
          password: undefined,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };



export const loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({
        success: false,
        errors: errors.array(),
      });
    }
    try {
      const { email, password } = req.body;
      const captain = await Captain.findOne({ email: email });
      if (!captain) {
        return res.status(404).json({
          success: false,
          message: "Captain Not Found",
        });
      }
      const passwordMatch = await bcrypt.compare(password, captain.password);
      if (passwordMatch) {
        const payload = {
          _id: captain._id,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const updatedCaptain = captain.toObject();
        delete updatedCaptain.password ;
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
            updatedCaptain,
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

  export const getCaptainProfile = async (req, res) => {
    return res.status(200).json({
      success: true,
      captain: req.captain,
    });
  };
  