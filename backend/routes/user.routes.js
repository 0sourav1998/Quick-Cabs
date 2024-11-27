import express from "express";
import { login, register } from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
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
    body("password").notEmpty().withMessage("Password Field is Required"),
  ],
  register
);

router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please Provide a valid email")
      .notEmpty()
      .withMessage("Email Cannot be Empty"),
    body("password")
      .notEmpty()
      .withMessage("Password Field is Required")
      .isLength({ min: 6 })
      .withMessage("Password cannot be less tha 6 characters"),
  ],
  login
);
export default router;
