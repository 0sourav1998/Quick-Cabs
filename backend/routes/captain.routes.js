import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { registerCaptain } from "../controllers/captain.controller.js";

// Validation for the captain registration
router.post("/register", [
  body("email")
    .isEmail()
    .withMessage("Should Be a Valid Email")
    .notEmpty()
    .withMessage("Email Cannot be Empty"),

  body("firstName")
    .isLength({ min: 3 })
    .withMessage("Must be at least 3 characters")
    .notEmpty()
    .withMessage("First Name is Required"),

  body("password")
    .notEmpty()
    .withMessage("Password Field is Required"),



  body("color")
    .isLength({ min: 3 })
    .withMessage("Color must be at least 3 characters")
    .notEmpty()
    .withMessage("Color is required"),

  body("plate")
    .isLength({ min: 3 })
    .withMessage("Plate must be at least 3 characters")
    .notEmpty()
    .withMessage("Plate is required"),

  body("capacity")
    .isNumeric()
    .withMessage("Capacity must be a number")
    .isLength({ min: 1 })
    .withMessage("Capacity must be at least 1")
    .notEmpty()
    .withMessage("Capacity is required"),

  body("vehicleType")
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid Type")
    .notEmpty()
    .withMessage("Vehicle Type is required"),

], registerCaptain);

export default router;
