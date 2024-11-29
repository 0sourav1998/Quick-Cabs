import Captain from "../models/captain.model.js";
import bcrypt from "bcryptjs"
import { validationResult } from "express-validator";


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
  